<template>
  <v-layout colomn>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-text-field
          id="email"
          name="email"
          label="email"
          v-model="email"
        ></v-text-field>

        <br>
        <v-text-field
          id="password"
          name="password"
          label="password"
          type="password"
          v-model="password"
        ></v-text-field>
        <br>
        <div class="error">{{error}}</div>
        <v-btn class="cyan" dark @click="register">Register</v-btn>

      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        const res = await AuthService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
