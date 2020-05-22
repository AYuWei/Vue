<template>
  <div id="app">
    
    <div id="nav">
      <div class="logo" @click="handleClick">渡一教育</div>
      <!-- <div class="logo">
        <router-link tag="div" :to="{path : '/Home'}">渡一教育</router-link>
      </div> -->
      <!-- router-link帮助我们跳转的 -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- tag规定渲染为什么标签 -->
      <ul class="ul">
         <router-link tag="li" :to="{path : '/Home'}">首页</router-link> 
         <router-link tag="li" :to="{path : '/Student'}">学员展示</router-link> 
         <router-link tag="li" :to="{path : '/Learn'}">课程学习</router-link> 
         <router-link tag="li" to="/Community">社区</router-link> 
         <router-link tag="li" to="/About">关于</router-link>
      </ul>
    </div>
    <router-view class="view"/> 
    <!-- roter-view组件展示的区域 -->
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      // [a, b, c, d]  => [a, b, c, e]  replace
      // [a, b, c, d]  => [a, b, c, d, e]  push

      this.$router.push('/Home'); // 此方法是从函数中添加进去 - 可以跳转到之前的路径
      // this.$router.replace('/home'); // 字方法只从数组中截取出来
      // this.$router.go(-1); // 表示到当前页面退几页
    }
  }
}
</script>

// scoped 规定了作用域
<style> 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
      padding: 50px 0px 0px 200px;
  }
#nav {
  position: relative;
  line-height: 50px;
  width: 100%;
  height: 50px;
  background-color:cadetblue;
  padding: 0 200px 0px 200px;
  box-sizing: border-box;
}

#nav .ul{
  position: absolute;
  right: 0px;
  padding-right: 200px;
}
#nav .logo{
  line-height: 50px;
  position: absolute;
}
#nav li{
  float: left;
  list-style: none;
  padding-right: 15px;
  cursor: pointer;
}

#nav .linkActive{
  font-weight: bold;
  color: #Fff;
}
.view{
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 30px;
}
h1{
  color: rgb(20, 0, 24);
  text-align: left;
  font-weight: 900;
  padding: 0px 0px 0px 200px;
}
</style>
