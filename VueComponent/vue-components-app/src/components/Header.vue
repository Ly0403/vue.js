<template>
  <div>
    <slot></slot>
    <table>
        <tr><input type="text" v-model="name"></tr>
        <tr><input type="text" v-model="surname"></tr>
        <tr><p>{{ show }}</p></tr>
    </table>
    <table>
        <tr><input type="number" v-model="number1"></tr>
        <tr><input type="number" v-model="number2"></tr>
        <tr><input type="number" v-model="total"></tr>
    </table>
  </div>
</template>

<script>
export default {
    props:['title'],
    data(){
        return{
            titleStyle:"color:red",
            name:'',
            surname:'',
            number1:0,
            number2:0,
            total:0
        }
    },
    watch:{
        number1(newValue,oldValue){
            this.total=this.number1+this.number2
        },
        number2(newValue,oldValue){
            this.total=this.number1+this.number2
        }
    },
    computed:{
        show(){
            return this.name+' '+this.surname
        }
    }
}
</script>

<style>

</style>