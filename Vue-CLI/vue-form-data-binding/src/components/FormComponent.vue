<template>
  <div>
    <input type="text" v-model="inputData" />
    <p>{{ inputData }}</p>
    <select v-model="selectedOption">
        <option>VueJS</option>
        <option>JS</option>
        <option>nodeJS</option>
        <option>React</option>
    </select>
    <p>{{ selectedOption }}</p>
    <input type="checkbox" id="checkbox01" v-model="checked"><label for="checkbox01">Value01</label><br>
    <p>Results: {{ checked ? "Approved":"Not Approved" }}</p>
    <input type="checkbox" id="checkbox02" v-model="selectedFrameworks" value="value02"><label for="checkbox02">Value02</label><br>
    <input type="checkbox" id="checkbox03" v-model="selectedFrameworks" value="value03"><label for="checkbox03">Value03</label><br>
    <input type="checkbox" id="checkbox04" v-model="selectedFrameworks" value="value04"><label for="checkbox04">Value04</label><br>
    <p>Selected Frameworks: {{ selectedFrameworks }}</p>
    <hr/>
    <input type="text" @keyup="addStudent" v-model="student">
    <div v-for="student in students" v-bind:key="student">
      <span @click="deleteStudent(student)">{{ student }}</span>
    </div>
    <hr/>
    <button @click.prevent="sendData">Send</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
        inputData:"Enter Value",
        selectedOption:"Select One Language",
        checked:false,
        selectedFrameworks:[],
        student:'',
        students:[]
    }
  },
  methods:{
    deleteStudent(student){
      this.students=this.students.filter(item=> item!=student);
    },
    sendData(){
      console.log("Data is sent")
    },
    addStudent(e){
      if(e.key=="Enter"&&this.student){
        if(!this.students.includes(this.student)){
          this.students.push(this.student);
          this.student=''
        }
      }
    }
  }
};
</script>

<style>
</style>