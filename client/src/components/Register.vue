<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dark class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <!-- <input type="email"
            name="email"
            v-model="email"
            placeholder="email" > -->
          <v-text-field
            id="email"
            name="email"
            label="email"
            v-model="email"
          ></v-text-field>

          <br>
          <!-- <input type="password"
            name="password"
            v-model="password"
            placeholder="password" > -->

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
        </div>
      </div>
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
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

  // watch: {
  //   email (value) {
  //     console.log('email changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'xxxxxs'
  //   }, 2000)
  // }
}
</script>

<style scoped>

</style>
