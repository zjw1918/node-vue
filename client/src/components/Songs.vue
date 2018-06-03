<template>
  <v-layout colomn>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div v-for="i in songs" :key="i">{{i}}</div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [1,2,3]
    }
  }
}
</script>

<style scoped>

</style>
