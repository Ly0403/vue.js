<template>
  <div  @click.ctrl="clean">
    <h2>Clean</h2>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    clean() {
      this.$emit("cleanEventSend");
    },
  },
};
</script>

<style>
</style>