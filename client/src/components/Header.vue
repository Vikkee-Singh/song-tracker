<template>
  <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
           <v-btn flat dark
            @click="navigateTo({name: 'root'})">
                Song Tracker
            </v-btn>
      </v-toolbar-title> 
      
      <v-spacer></v-spacer>

      <v-toolbar-items>
          <v-btn flat dark
          @click="navigateTo({name: 'Login'})">
          LOGIN
          </v-btn>
          <v-btn flat dark
          @click="navigateTo({name: 'Register'})">
          SIGN UP
          </v-btn>
      </v-toolbar-items>
      
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>
