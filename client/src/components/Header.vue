<template>
  <v-toolbar app class="cyan" dark>
    <v-toolbar-title>
      <span class="home"
        @click="nagivateTo({name: 'root'})">
        History
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark @click="nagivateTo({name: 'songs'})">
        Bowse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn"
        flat dark @click="nagivateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn"
        flat dark @click="nagivateTo({name: 'register'})">
        Sign up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn"
        flat dark @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    nagivateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.nagivateTo({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
