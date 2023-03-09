<template>
  <div>
    <h3>{{ titleText }}</h3>
    <h6>{{ titleText02 }}</h6>
  </div>
</template>
<script>
export default {
    props:['titleText','titleText02'],
  data() {
    return {
      title: "Vue Title New",
    };
  },
};
</script>
<style scoped>
h3{
    color: aqua;
    font-size: 30px;
    font-weight: 700;
}
</style>