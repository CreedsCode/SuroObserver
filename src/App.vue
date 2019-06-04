<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Suro</span>
        <span class="font-weight-light">Observer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer app>
      <v-layout row wrap text-xs-center>
        <span>Made with &hearts;</span>
        <span>
          Contribute on
          <a href="https://github.com/CreedsCode/SuroObserver" target="_blank">Github</a>
        </span>
        <span>
          Twitter:
          <a href="https://twitter.com/CreedGamesOA" target="_blank">@CreedGamesOA</a>
        </span>
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
