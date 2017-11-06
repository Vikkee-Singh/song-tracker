<template>
  <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
           <v-btn flat dark
            @click="navigateTo({name: 'root'})">
                Song Tracker
            </v-btn>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat dark
          @click="navigateTo({name: 'Songs'})">
          Browser
          </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
          <v-btn v-if="!$store.state.isUserLoggedIn" flat dark
          @click="navigateTo({name: 'Login'})">
          Login
          </v-btn>
          <v-btn v-if="!$store.state.isUserLoggedIn" flat dark
          @click="navigateTo({name: 'Register'})">
          Sign Up
          </v-btn>
           <v-btn v-if="$store.state.isUserLoggedIn" flat dark
          @click="logout()">
          Log Out
          </v-btn>
      </v-toolbar-items>
      
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style>

</style>
