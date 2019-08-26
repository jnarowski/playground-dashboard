<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Playground</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" href="#" @click="$emit('logout')">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.navbar-brand {
  color: #fff;
}
.nav-link {
  color: #fff;
}
</style>
