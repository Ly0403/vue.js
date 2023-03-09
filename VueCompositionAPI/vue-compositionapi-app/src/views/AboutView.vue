<template>
  <div>
    <input type="text" v-model="searchKey">
    <div v-for="day in result" :key="day">
      <ul class="list-group bg-dark">
        <li class="list-group-item list-group-item-primary">{{ day }}</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import {ref,computed,watch,watchEffect} from 'vue';
export default {
  setup(){
    const days=ref(['Monday','Tuesday','Wednesday','Friday']);

    const searchKey=ref('Monday');
    const result=computed(()=>{
      return days.value.filter((day)=>day.toUpperCase().includes(searchKey.value.toUpperCase()));
    })
    watch(searchKey,()=>{
      console.log(searchKey.value);
    })
    
    return {days,searchKey,result};
  }

}
</script>

<style>
input{
  margin:14px;
  padding: 10px;
  width: 100%;
  border-bottom: 5px solid #777;
  color: red;
}

</style>