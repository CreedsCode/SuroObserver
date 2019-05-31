<template>
        <div v-if="this.StreamChannel.twitch.name" >
              <VueTwitchPlayer :volume=0 :channel="this.StreamChannel.twitch.name" />
        </div>
</template>

<script>
import VueTwitchPlayer from 'vue-twitch-player'

export default {
  name: 'StreamCard',
  components: {
    VueTwitchPlayer
  },
  props: {
    StreamChannel: Object,
  }
}
</script>

<style>

</style>
