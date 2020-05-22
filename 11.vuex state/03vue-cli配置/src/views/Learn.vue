<template>
    <div class="learn">
        <!-- {{ $store.state.learn.courseName }}
        {{ $store.getters.coursePrice }} -->
        <h1>{{ courseName }} =:= {{ coursePrice }} <button @click="handleClick">提交</button></h1>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
 export default {
    computed : {
        ...mapState("learn",['courseName']), // 因为state不在全局下
        ...mapGetters("learn",['coursePrice']) // 暴露在全局下。但是state设置了、
    },
    methods : {
        handleClick(){
            this.$store.commit("learn/changePrice", {price : 20})
        }
    }
}
</script>