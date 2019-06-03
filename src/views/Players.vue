<template>
  <v-container row grid-list-xl>
    <v-layout wrap text-xs-center>
      <v-flex xs12 v-for="player in players" v-bind:key="player.name">
        <v-card fill-width>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex flexbox>
                <span class="headline">{{player.name}}</span>
                <p>{{player.role.name}}</p>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <div></div>
          </v-card-title>
          <v-card-actions grid-list-xl>
            <v-container fluid grid-list-xl>
              <v-container>
                <v-container v-if="player.isAlive()">
                  <span class="grey--text">R.I.P | {{player.deathDate().toDateString()}}</span>
                  <v-container>
                    <TwitchFrame :id="player.daethTwitchClipId" />
                  </v-container>
                </v-container>

                <v-container v-else-if="player.role.name != 'Caster'">
                  <span class="grey--text">Am Leben</span>
                  <br>
                </v-container>
              </v-container>
              <div>
                <v-btn
                  flat
                  v-if="player.youtube.url"
                  :href="player.youtube.url"
                  target="_blank"
                  color="red"
                >Youtube</v-btn>
                <v-btn
                  flat
                  v-if="player.twitch.url"
                  :href="player.twitch.url"
                  target="_blank"
                  color="purple"
                >Twitch</v-btn>
                <v-btn
                  flat
                  v-if="player.twitch.url"
                  :href="player.twitter.url"
                  target="_blank"
                  color="blue"
                >Twitter</v-btn>
                <v-btn
                  flat
                  v-if="player.instagram"
                  :href="player.instagram.url"
                  target="_blank"
                  color="black"
                >Instagram</v-btn>
              </div>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TwitchFrame from '../components/TwitchFrame'

export default {
  components: {
    TwitchFrame
  },
  data () {
    return {
      splitted: []
    }
  },
  computed: {
    ...mapState(['players']),
    ...mapGetters(['casters'])
  }
}
</script>
