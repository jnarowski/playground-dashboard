<template>
  <div id="app">
    <the-header :isLoggedIn="isLoggedIn" @logout="logout"></the-header>
    <router-view />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    TheHeader,
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters['authentication/isLoggedIn']
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch('authentication/logout').then(() => {
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-color: #12263f;
}
html {
  height: 100%;
}
.no-top-border {
  border-top-width: 0;
}
</style>
