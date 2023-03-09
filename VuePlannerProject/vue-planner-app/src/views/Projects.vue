<template>
  <div>
    <div class="project" :class="{completed:project.completed}">
      <div class="actions">
        <h3 @click="showDetail = !showDetail">{{ project.title }}</h3>
        <div>
          <span class="material-icons" :class="{completed:project.completed}" @click="completeProject" > done </span>
          <span class="material-icons" @click="deleteProject"> delete </span>
          <router-link :to="{name:'EditProject',params:{id:project.id}}"><span class="material-icons"> edit </span></router-link>
        </div>
      </div>
      <div v-if="showDetail" class="details">
        <p>{{ project.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      url: "http://10.100.100.153:3000/projects/"+this.project.id
    };
  },
  methods:{
    deleteProject(){
        fetch(this.url,{method:"DELETE"})
        .then(this.$emit("delete",this.project.id))
    },
    completeProject(){
        fetch(this.url,{
            method:"PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({completed:!this.project.completed})
        })
        .then(this.$emit("completed",this.project.id))
    }
  }
};
</script>

<style>
.project {
  margin: 20px auto;
  background-color: blanchedalmond;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
.project.completed{
    border-left: 4px solid greenyellow;
}
h3 {
  cursor: pointer;
}
.actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.material-icons{
    font-size: 24px;
    margin-left: 10px;
    color: #e90074;
    cursor: pointer;
}
.material-icons:hover{
    color: black;
}

.material-icons.completed{
    color: greenyellow;
}

</style>