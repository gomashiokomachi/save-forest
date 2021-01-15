<template>
  <Cloud :end="1200" />
  <RainCloud :start="1200" :end="2800" />
  <Rain :start="2000" :end="2800" />
  <Rainbow :start="3200" />
</template>

<script>
import Cloud from  './Cloud.vue'
import RainCloud from  './RainCloud.vue'
import Rain from  './Rain.vue'
import Rainbow from  './Rainbow.vue'

export default {
  components: {
    Cloud,
    RainCloud,
    Rain,
    Rainbow
  }
}
</script>

<style lang="scss">

</style>
