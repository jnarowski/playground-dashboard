<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  background-color: #1c2532;
  color: #fff;
  text-align: center;
  word-spacing: 1px;
  font-size: 16px;
  font-family: Heebo, Helvetica Neue, Source Sans Pro, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
</style>
