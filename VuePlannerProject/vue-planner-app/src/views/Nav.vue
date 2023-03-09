<template>
  <nav class="mainNav">
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'AddProject'}">Add Project</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.mainNav{
    text-align: center;
    margin: 40px auto 0;
}

.mainNav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
}

a.router-link-active{
    border-bottom: 2px solid #76dd78;
    color: #76dd78;
}

</style>