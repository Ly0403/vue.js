const vforApp=Vue.createApp({
    // template:`
    // <ul>
    //   <li v-for="day in days">{{day}}</li>
    // </ul>
    // `,
    template:`
    <ul>
      <li v-for="person in persons">The name of person is {{person.name}} and salary is {{person.salary}}</li>
    </ul>
    `,
    data(){
        return{
           //days:["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]
           persons:[
            {name:"User1",salary:"1111"},
            {name:"User2",salary:"2222"},
            {name:"User3",salary:"3333"}
           ]
        }
    },
    methods:{
    }
});

vforApp.mount('#vfor');