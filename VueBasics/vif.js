const vifApp=Vue.createApp({
    template:`
    <div v-if="showInfo">Vif true</div>
    <button @click="show()">
        <span v-if="!showInfo">Show</span>    
        <span v-else>Hide</span> 
    </button>
    `,
    data(){
        return{
            showInfo: true
        }
    },
    methods:{
        show(){
            this.showInfo=!this.showInfo;
        }
    }
});

vifApp.mount('#vif');

//diffirences between vif and v-show
// vif not exists in DOM vshow exists