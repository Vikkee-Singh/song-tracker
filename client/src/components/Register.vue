<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
              name="input-1"
              label="Email :"
              v-model="email">
          </v-text-field>
          <br><br>
          <v-text-field
              name="input-1"
              label="password :"
              v-model="password">
          </v-text-field><br>
          <v-alert color="error" v-html="error" dark>
          </v-alert>
          <div class="error" v-html="error" /><br>
          <v-btn class="cyan" dark @click="Register">Register</v-btn>
        </div>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'vikkeesingh@gmail.com',
      password: 'password1245',
      error: null
    }
  },
  methods: {
    async Register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
 .error {
    color: red;
 }
</style>
