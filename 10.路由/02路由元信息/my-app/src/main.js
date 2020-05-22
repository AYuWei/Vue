import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style/reset.css"
Vue.config.productionTip = false
// 当路由开始时执行
router.beforeEach((to, from, next)=>{
      // if(to.name === "student" || to.name === "community" || to.name === "academic" || to.name === "download" || to.name === "personal" ){
      // if(["student", "community","academic","download","personal"].includes(to.name)){
    // some 一真则真 ， every一假则假
    const result = to.matched.some(router => router.meta && router.meta.login);
    if(result){
      // 校验
      const isLogin = document.cookie.includes('login=true');
      if(isLogin){  // 已经登陆过
        next();
        console.log(document.cookie)
        return;
      }

      const toLoginFlag = window.confirm("该页面需要登陆后才能访问！")
      console.log(toLoginFlag)
      if(toLoginFlag){
        next("/login"); // 直接跳转
      }

      return;
    }
      next();
    
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
