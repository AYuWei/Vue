<template>
    <div>
        <h4>姓名:{{ name }}</h4>
        <h4>年龄:{{ age }}</h4>
        <button @click="showInfo">显示信息</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
export default {
    // 要使用父元素内容则需校验。
    props : ["name","age","fn"],
    methods: {
        showInfo(){
            this.$emit("show"); // $emit()主动触发事件
        },
        changeAge(){
            this.fn();
        }
    },
}
</script>