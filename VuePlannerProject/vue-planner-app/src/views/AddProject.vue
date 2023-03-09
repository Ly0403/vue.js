<template>
  <form @submit.prevent="addProject">
    <h1>Add Project</h1>
    <label>Title</label>
    <input type="text" required v-model="title"/>
    <label>Details</label>
    <textarea required v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      details:''
    }
  },
  methods:{
    addProject(){
      let project={
        title: this.title,
        details: this.details,
        completed: false
      }
      fetch("http://10.100.100.153:3000/projects",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(project)
      })
      .then(()=>{this.$router.push("/")})
      .catch((err)=>console.log(err))

    }
  }
};
</script>

<style>
form{
  background-color:  aliceblue;
  padding: 20px;
  border-radius: 10px;
  margin:20px;
}
label{
  display: block;
  color: blueviolet;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input{
  padding:10px;
  border: 0;
  border-bottom: 8px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea{
  width: 100%;
  border-bottom: 8px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
}

form button {
  display: block;
  margin: 20px auto 0;
  background-color: aquamarine;
  color: blue;
  padding: 10px;
  border-radius: 7px;
  font-size: 16px;
}
</style>
