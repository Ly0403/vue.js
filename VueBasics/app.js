const vueApp=Vue.createApp({
    template:`
    <h1>Title: {{title}}</h1>
    <h2>Title02: {{title02}}</h2>
    <p>Paragraph: {{parag}}</p>
    <p>Comment: {{comment}}</p>
    <button v-on:click="add()">Add</button>
    <p>The number of comments is {{comment}}</p>
    `,
    data(){
        return{
            title:"title01",
            title02:"title02",
            parag:"paragrah",
            comment:0
        }
    },
    methods:{
        add(){
            console.log("first vue method");
            this.comment++;
        }
    }   
});
vueApp.mount(".app");