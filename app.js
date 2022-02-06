const app = Vue.createApp({
    data() {
        return {
            messageTypes:[
                {type:"success",header:"success message"},
                {type:"info",header:"info message"},
                {type:"warning",header:"warning message"},
                {type:"error",header:"error message"}

            ]
        }
    },

    methods: {
        // deleteNotification(){
        //     this.show = !this.show
        //     console.log("click on x parent ");
            
        // }
    },
})

app.component('notification-message',{
    template:`#notification-message-template`,
    //props:['type','header'],
    props:{
        type:{type:String,default:'success'},
        header:{type:String,default:`Information:\ Yor are eligible!!!`}
    },
    
    data() {
        return {
            remove:true
        }
    },
    methods: {
        clickOnCross(){

            this.remove = false;
            
            
            console.log("click on in component");
            
            
            
            
        }
    },
})

app.mount('#app')