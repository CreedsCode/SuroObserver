<template>
<v-container  fluid  grid-list-xl >
  <v-card  row wrap fluid>
      <v-card-title>
            <h1>Casters</h1>
          </v-card-title>
          <v-container  wrap fluid>
      <v-layout  row  text-xs-center>
        <v-flex>
          <v-card  >
            <v-card-title>
              <h1>Halbzwilling</h1>
            </v-card-title>
            <v-container  >
              <div id="twitch-embed" />
              </v-container>
          </v-card>
          </v-flex>
          <v-flex>
          <v-card  >
            <v-card-title>
              <h1>Unge</h1>
            </v-card-title>
            <v-container  >
            <iframe width="854" height="480" src="https://www.youtube-nocookie.com/embed/-GO1XcFoz0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-container>
          </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    </v-card>
</v-container>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
