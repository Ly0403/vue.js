<template>
  <div>
    <nav>
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link> | 
      <router-link :to="{name:'newpage'}">New</router-link> | 
      <router-link :to="{name:'students'}">Students</router-link> 
    </nav>
    <div>
      <span @click="backToHome">Home</span> |
      <span @click="backPage">Back</span> |
      <span @click="forwardPage">Forward</span> 
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  methods:{
    backToHome(){
      this.$router.push('/')
    },
    backPage(){
      this.$router.go(-1)
    },
    forwardPage(){
      this.$router.go(1)
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
span{
  cursor: pointer;
}
</style>
