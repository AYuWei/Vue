<template>
    <div class="personal">
        姓名：<input type="text" v-model="name" />
        <button>确认</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name : ""
        }
    },
    //  导航守卫、就是你在当前页面有很重要的信息设置的时候，点击了其他按钮，则给出一个提示
    // 离开这路由
    beforeRouteLeave (to, from, next) {
        // to 去哪 from从哪去  next执行。 this为undefined
        const result = window.confirm("你确定要离开我吗？");
        if(result){
            next();
        }else{
            return;
        }
    },
    // 进入这路由  this为undefined
    beforeRouteEnter (to, from, next) {  
        const result = window.confirm('个人中心已恭候多时！请进')
        if(result){
            next(vm => {
                console.log(vm)
            });
        }else{
            return;
        }
    }
}
</script>

<style scoped>
    button{
        padding:0px 5px 0px 5px;
        margin-left: 10px;
    }
</style>