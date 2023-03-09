const application=Vue.createApp({
    template:`
    <h1>Frameworks</h1>
    <ul>
      <li v-for="frame in frameworks" class="list" v-bind:class="{selected:frame.selected}" v-on:click="selectTag(frame)">
        {{frame.name}}
      </li>
    </ul>
    <ul>
      <li v-for="selectedframe in selectedFrameworks" class="list">
        {{selectedframe.name}}
      </li>
    </ul>
    `,
    data(){
        return{
            frameworks:[
                {name:"vue",selected:true},
                {name:"react",selected:true},
                {name:"javascript",selected:false},
                {name:"angular",selected:false}
            ]
        }
    },
    methods:{
        selectTag(f){
            f.selected=!f.selected;
        }
    },
    computed:{
        selectedFrameworks(){
            return this.frameworks.filter(i=>i.selected);
        }
    }
});

application.mount('#application');