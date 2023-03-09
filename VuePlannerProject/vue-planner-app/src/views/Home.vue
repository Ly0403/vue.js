<template>
  <div>
    <div v-for="project in projects" :key="project"><Project v-bind:project="project" @delete="refreshAfterDelete" @completed="resfreshAfterCompleted"></Project>
    </div>
  </div>
</template>

<script>
import Project from './Projects.vue';
export default {
  name: 'HomeView',
  components:{
    Project
  },
  data(){
    return{
      projects:[]
    }
  },
  mounted(){
    fetch("http://10.100.100.153:3000/projects")
    .then(res=>res.json())
    .then(data=>this.projects=data)
  },
  methods:{
    refreshAfterDelete(id){
      this.projects=this.projects.filter((project)=>{
        return project.id!==id
      })
    },
    resfreshAfterCompleted(id){
      let p=this.projects.find((project)=> project.id===id);
      p.completed=!p.completed;
    }
  }
}
</script>
