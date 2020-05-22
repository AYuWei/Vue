<template>
    <div class="add">
        <h1>添加学生 {{name}}-{{age}}</h1>
        <div>姓名：<input type="text" v-model="name"/></div>
        <div>年龄：<input type="text" v-model="age"/></div>
        <div><button @click="handleClick">添加</button></div>
        <hr />
    </div>
</template>

<script>

import { mapState, mapMutations } from "vuex";

export default {
    data(){
        return {
            name : '',
            age : null
        }
    },
    methods: {
        ...mapMutations(["changeStudentList"]),           

        handleClick(){
            const obj = {
                  name : this.name,
                  age : this.age,
                  id : +new Date()
            }
            // this.$store.state.studentList.push(obj);
            // this.$store.commit("changeStudenList", obj)
            //  this.$store.commit("changeStudentList", {obj, name: "渡一"})

            // this.changeStudentList( {obj, name: "渡一"} )

            // 异步处理
            this.$store.dispatch("changeStudentList",{obj, name : "渡一"})
        }
    },
    // computed: {

    //     ...mapState(["age","look"]),
    //     ...mapState({
    //         stateName : state => state.name // 处理同名的
    //     })


    //     // ...mapState(["name","age","look"])// 同名的会冲突


    //     // name (){
    //     //     return this.$store.state.name;
    //     // },
    //     // age(){
    //     //     return this.$store.state.age;
    //     // },
    //     // look(){
    //     //     return this.$store.state.look;
    //     // }
    // },
}
</script>

<style scoped>
    .add h1{
        padding-bottom: 10px;
    }
    .add div{
        text-align: left;
        padding: 10px;
    }
</style>