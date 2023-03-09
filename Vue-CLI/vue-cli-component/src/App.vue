<template>
  <div>
    <VueTitle v-bind:titleText="textForTitle" v-bind:titleText02="textTitle02"></VueTitle>
    <h3>Title in App Vue</h3>
    <ButtonComponent @cleanEventSend="cleanInput"></ButtonComponent>
    <input type="text" ref="inputText">
  </div>
</template>

<script>
import VueTitle from "./components/TitleComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
export default {
  name: "App",
  components: {
    VueTitle,
    ButtonComponent
  },
  data() {
    return {
      textForTitle: "Text from App and From Data",
      textTitle02:"This is the new texttitle"
    };
  },
  methods:{
    cleanInput(){
      this.$refs.inputText.value=''
    }

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
