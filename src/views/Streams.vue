<template>
<v-container   >
    <v-flex v-for="(item, index) in PlayerStreamPlatforms" :key="index">
        <StreamCard  :StreamChannel="item"/>
    </v-flex>
</v-container>
</template>

<script>
import StreamCard from '../components/StreamCard'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    StreamCard
  },
  data () {
    return {
      loadstate:[

      ]
    }
  },
  computed: {
    ...mapGetters([
      'PlayerStreamPlatforms'
    ])
  },
  mounted(){
    
  }
}
</script>

<style>

</style>
