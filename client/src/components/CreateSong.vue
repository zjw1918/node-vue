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
      <v-btn @click="create" class="cyan" dark>Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
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
    async create () {
      const isAllFieldRequired = Object.keys(this.song)
        .every(i => !!this.song[i])
      if (!isAllFieldRequired) {
        this.error = 'Please fill all fields.'
        return
      }

      try {
        this.error = null
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.error(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
