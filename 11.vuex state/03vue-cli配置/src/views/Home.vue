<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    // get请求  当发送请求的时候会经过配置的代理。通过代理能够跨域
    axios.get("/api/chat/sendMsg", {
      params : {
        msg : "你好",
        appkey : "shan_1546508603194"
      }
    }).then(res => {
      console.log(res)
    })
  },
}
</script>

<style lang="less" scoped>
//  @import "../assets/style/index.less";
  div{
    color: @color;
  }
</style>