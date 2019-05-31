<template>
<v-container fluid grid-list-xl>
  <v-layout row wrap text-xs-center>
    <v-flex  v-for="player in players" v-bind:key="player.name"  >
      <v-card >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12  flexbox>
                <span class="headline">{{player.name}}</span>
                <p>{{player.role.name}}</p>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-title>
          <div>

              <div v-if="player.isAlive()">
                <span class="grey--text">R.I.P | {{player.deathDate().toDateString()}}</span><br>
              </div>

              <div v-else-if="player.role.name != 'Caster'">
                <span class="grey--text">Am Leben</span><br>
              </div>

          </div>
        </v-card-title>
        <v-card-actions  grid-list-xl >
          <v-container fluid grid-list-xl>
            <v-btn   flat v-if="player.youtube.url" :href="player.youtube.url" target="_blank" color="red">Youtube</v-btn>
            <v-btn  flat v-if="player.twitch.url" :href="player.twitch.url" target="_blank" color="purple">Twitch</v-btn>
            <v-btn   flat v-if="player.twitch.url" :href="player.twitter.url" target="_blank" color="blue">Twitter</v-btn>
            <v-btn  flat  v-if="player.instagram" :href="player.instagram.url" target="_blank" color="black">Instagram</v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'players'
    ]),
    ...mapGetters([
      'casters'
    ])
  }
}

</script>
