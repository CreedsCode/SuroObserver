<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title  class="headline text-uppercase">
        <router-link to="/">
          <span>Suro</span>
          <span class="font-weight-light">Observer</span>
        </router-link>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="players"
      >
        <span class="mr-2">Teilnehmer</span>
      </v-btn>
      <v-btn
        flat
        to="/"
      >
        <span class="mr-2">Casters</span>
      </v-btn>
      <v-btn
        flat
        to="/streams"
      >
        <span class="mr-2">Streams</span>
      </v-btn>
      <v-btn
        flat
        href="http://31.214.211.129:8123/"
      >
        <span class="mr-2">LiveMap</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>

 <v-footer   app>
   <v-layout row wrap text-xs-center>
      <span >Made with &hearts;</span>
      <span >Contribute on <a href="https://github.com/CreedsCode/SuroObserver" target="_blank" > Github</a></span>
      <span>Twitter: <a href="https://twitter.com/CreedGamesOA" target="_blank" >@CreedGamesOA</a> </span>
     </v-layout>
</v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      //
    }
  },
  mounted () {
    this.$store.dispatch('loadPlayers')
  }
}
</script>
