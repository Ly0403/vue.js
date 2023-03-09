<template>
  <div>
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./views/Nav.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}
</style>
