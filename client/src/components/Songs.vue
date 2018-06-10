<template>
  <v-layout colomn>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn slot="action" class="cyan accent-2"
          @click="navigateTo({name: 'songs-create'})"
          fab absolute right middle small light>
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs" :key="song.id">
          <div><img :src="song.albumImageUrl" width="40px" alt="" srcset=""> - {{ song.title }} - {{ song.album }}</div>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const res = await SongsService.index()
    this.songs = res.data
  }
}
</script>

<style scoped>

</style>
