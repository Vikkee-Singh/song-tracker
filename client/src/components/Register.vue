<template>
  <div>
    <h1> Register </h1>
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email" />
    <br><br>
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password" /><br>
    <button @click="Register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async Register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

</style>
