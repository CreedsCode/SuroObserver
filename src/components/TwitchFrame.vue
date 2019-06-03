<template>
  <div>
    <br>
    <div :id="id" v-if="id">
      <v-btn :id="id+'btn'" v-on:click="loadFrame()">Load Clip</v-btn>
    </div>
    <div v-else>No death clip found :§</div>
  </div>
</template>

<script>
export default {
  name: 'TwitchFrame',
  props: ['id'],
  data () {
    return {
      url: 'https://clips.twitch.tv/embed?autoplay=false&clip=' + this.id
    }
  },
  methods: {
    loadFrame: function () {
      var iframe = document.createElement('iframe')
      iframe.setAttribute('src', this.url)
      iframe.setAttribute('height', '300')
      iframe.setAttribute('width', '400')
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('scrolling', 'false')
      iframe.setAttribute('allowfullscreen', 'true')
      iframe.setAttribute('preload', 'metadata')

      // Apped iframe, to the DOM.
      document.getElementById(this.id).appendChild(iframe)

      // Remove the load button.
      document.getElementById(this.id + 'btn').remove()
    }
  }
}
</script>

<style>
</style>
