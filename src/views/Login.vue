<template>
  <div class="text-left" style="margin: auto; width: 300px;">
    <div class="p-3" style="margin-top: 50px; background: #eee;">
      <form class="login" @submit.prevent="login">
        <h1>Sign in</h1>
        <div class="form-group">
          <label>Email</label>
          <input
            class="form-control"
            required
            v-model="email"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            class="form-control"
            required
            v-model="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      let email = this.email
      let password = this.password
      this.$store
        .dispatch('authentication/login', { email, password })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err))
    },
  },
}
</script>
