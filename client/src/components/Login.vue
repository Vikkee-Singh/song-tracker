<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
       <Panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
              name="input-1"
              label="Email :"
              v-model="email">
          </v-text-field>
          <br><br>
          <v-text-field
              name="input-1"
              type="password"
              label="password :"
              v-model="password">
          </v-text-field><br>
          <v-alert color="error" v-html="error" dark>
          </v-alert>
          <div class="error" v-html="error" /><br>
          <v-btn class="cyan" dark @click="Login">Login</v-btn>
        </div>
       </Panel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: 'vikkeesingh@gmail.com',
      password: 'password1245',
      error: null
    }
  },
  methods: {
    async Login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
 .error {
    color: red;
 }
</style>
