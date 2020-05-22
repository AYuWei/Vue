import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style/reset.css"
Vue.config.productionTip = false
// 当路由开始时执行
router.beforeEach((to, from, next)=>{
    console.log("全局守卫：beforeEach");
    next();
})
// 当路由加载完后执行
router.beforeResolve((to, from, next)=>{
    console.log("路由加载完成：beforeResolve");
    next();
})
// 解析完毕后，没有了
router.afterEach(()=>{
  console.log("解析完毕：afterEach")
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
