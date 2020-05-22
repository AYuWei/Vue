<template>
    <div>
        <son 
        :name="name" 
        :age="age" 
        :fn = "changeAge"
        @show='showInfo'></son>
        <div
            v-if="show"
            class="info"
            :style='{
                margin:"20px 0",
                padding:"50px 0",
                border:"1px solid red"
            }'
        >
            姓名：宇威</br>
            年龄：{{ age }}</br>
            爱好：女</br>
        </div>
    </div>
    
</template>

<script>
import Son from "./Son";
export default {
     components : {
        Son
    },
    data(){
        return {
            name : "宇威",
            age : "18",
            show : false
        }
    },
    methods: {
        showInfo(){
            this.show = !this.show;
        },
        changeAge(){
            this.age = 16;
        }
    },
   
}
</script>