<template>
  <MiLogin msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MiLogin from './components/MiLogin.vue'

export default {
  name: 'App',
  components: {
    MiLogin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    display: block;
    margin: 0;
    padding: 0;
}
</style>
