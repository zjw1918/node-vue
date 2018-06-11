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
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <v-btn class="cyan" dark
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })">View
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="song-album-image" :src="song.albumImageUrl" alt="">
            </v-flex>
          </v-layout>
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
.song-title {
  font-size: 22px;
}
.song-artist {
  font-size: 20px;
}
.song-genre {
  font-size: 18px;
}
.song-album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
