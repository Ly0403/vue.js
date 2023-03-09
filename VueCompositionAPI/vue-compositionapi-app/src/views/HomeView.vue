<template>
  <div class="about">
    <h1>This is {{name}}</h1>
    <h1 ref="info">This is {{job.name}}</h1>
    <button @click="clicked">Reach Method in Setup</button>
    <p ref="info"></p>
    <input v-model="name">
  </div>
</template>

<script>
import {ref,reactive} from 'vue';

export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    let name=ref('Yucel');
    let job=reactive({name:'sanayici'});

    const info=ref(null);
    const clicked=()=>{
      name.value='Latifah';
      job.name='new job';
      console.log(name);
    }
    return {name,job, clicked,info};
  }
}
</script>
