const vbindApp=Vue.createApp({
    template:`
      <div :style="style">Test Css Div</div>
    `,
    data(){
        return{
            style:"color:green"
        }
    },
    methods:{
    }
});

vbindApp.mount('#vbind');

// v-bind: is equal to :