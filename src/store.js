import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiKey } from '../google'

Vue.use(Vuex)
Vue.use(axios)
export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    SET_PLAYERS (state, players) {
      state.players = players
    }
  },
  actions: {
    loadPlayers ({ commit }) {
      var players = []
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/18-ObnorDG1i50_p22596wFiXqihp4dI74h6-DY2fbAQ/values/A9%3AI120?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE&key=${apiKey}`)
        .then((result) => {
          // => [0],..[1],..[2],..[3],..[4],..[5],..[6],.....[7]
          //    name     mc     dead   yt  yturl twitch twitter insta
          result.data.values.forEach(element => {
            var player = {
              name: element[0],
              minecraft: element[1],
              deathDateTime: element[2],
              deathDate: function () {
                return (new Date(element[2]))
              },
              isAlive: function () {
                if (this.deathDateTime === '') {
                  return false
                } else {
                  return true
                }
              },
              youtube: {
                name: element[3],
                url: element[4]
              },
              // twitch :  element[5],
              twitch: {
                url: element[5],
                name: element[5].split('twitch.tv/')[1]
              },
              twitter: {
                url: element[6],
                name: element[6].split('twitter.com/')[1]
              },
              // Instagram is some times null and the forEach breaks.
              getInstagram: function () {
                var instagram = {
                  url: element[7],
                  name: element[7].split('instagram.com/')[1]
                }
                return instagram
              },
              getRole: function () {
                var role = { name: 'Player' }
                if (element[0][(element[0].length - 1)] === '*') {
                  console.log(element[0][(element[0].length - 1)])
                  role.name = 'Caster'
                  // remove * at the end of the name.
                  this.name = this.name.split('*')[0]
                }
                return role
              }
            }
            if (element[7] !== undefined) {
              player.instagram = player.getInstagram()
            }
            player.role = player.getRole()
            players.push(player)
          })
          commit('SET_PLAYERS', players)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {
    casters: state => {
      return state.players.filter(player => player.role.name === 'Caster')
    },
    PlayerStreamPlatforms: state => {
      // Gets only the stream information for the streams site and sorts out all the dead players.
      var result = []

      for (let index = 0; index < state.players.length; index++) {
        const player = state.players[index]
        if (player.isAlive() === false) {
          continue
        }
        var PlayerStream = {
          name: player.name,
          youtube: player.youtube,
          twitch: player.twitch
        }

        result.push(PlayerStream)
      }

      return result
    }
  }
})

/*
*                                     spreadsheetId=>
* Google Doc: https://docs.google.com/spreadsheets/d/18-ObnorDG1i50_p22596wFiXqihp4dI74h6-DY2fbAQ/htmlview?sle=true#gid=0
* Api Base: https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:A5
*
* api url: https://sheets.googleapis.com/v4/spreadsheets/18-ObnorDG1i50_p22596wFiXqihp4dI74h6-DY2fbAQ/values/Sheet1!A1:D5
*/
