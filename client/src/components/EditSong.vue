<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Matedata">
        <v-text-field required :rules="[rules.required]" label="Title" v-model="song.title"></v-text-field>
        <v-text-field required :rules="[rules.required]" label="Artist" v-model="song.artist"></v-text-field>
        <v-text-field required :rules="[rules.required]" label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field required :rules="[rules.required]" label="Album" v-model="song.album"></v-text-field>
        <v-text-field required :rules="[rules.required]" label="AlbumImageUrl" v-model="song.albumImageUrl"></v-text-field>
        <v-text-field required :rules="[rules.required]" label="YoutubeId" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8 class="ml-2">
      <panel title="Song Structure">
        <v-text-field required :rules="[rules.required]" label="Tab" multi-line v-model="song.tab"></v-text-field>
        <v-text-field required :rules="[rules.required]" label="Lyrics" multi-line v-model="song.lyrics"></v-text-field>
      </panel>

      <div class="danger-alert">{{error}}</div>
      <v-btn @click="save" class="cyan" dark>Save Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      rules: {
        required: value => !!value || 'required.'
      },
      error: null
    }
  },
  methods: {
    async save () {
      const isAllFieldRequired = Object.keys(this.song)
        .every(i => !!this.song[i])
      if (!isAllFieldRequired) {
        this.error = 'Please fill all fields.'
        return
      }

      const songId = this.$store.state.route.params.songId
      try {
        this.error = null
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.error(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style scoped>

</style>
