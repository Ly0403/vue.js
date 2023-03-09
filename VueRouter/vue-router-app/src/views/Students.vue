<template>
  <div>
    <h1>Students</h1>
    <div v-for="student in students" :key="student.id">
        <router-link :to="{name:'studentinfo',params:{id:student.id}}">Name: {{student.name}}, Grade: {{student.grade}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data()
    {
        return{
            students:[
                {id:1,name:'Student01',grade:44},
                {id:2,name:'Student02',grade:54},
                {id:3,name:'Student03',grade:64},
                {id:4,name:'Student04',grade:74},
            ]
        }
    }

}
</script>

<style>

</style>