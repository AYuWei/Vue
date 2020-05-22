import Vue from "vue"
import  Router from "vue-router"
// import Home from "../views/Home.vue"
import Home from "../views/Home.vue"

Vue.use(Router); // 添加了$router $route

export default new Router({
  mode : "history",
  linkExactActiveClass : "active", // 更换点击后的点击路由的class
  linkActiveClass : "linkActive",
  routes : [
    {
      path : '/Home',
      name : 'home',
      component : Home,
    },
    {
      path : '/learn',
      name : 'learn',
      component : ()=> import('../views/Learn.vue') 
    },
    {
      path : "/student",
      name : 'student',
      component : () => import('../views/Student.vue')
    },
    {
      path : "/about",
      name : 'about',
      component : () => import('../views/About.vue')
    },
    {
      path : "/community",
      name : 'community',
      component : () => import('../views/Community'),
      // 重定向，当点击这个组件的时候重定向打开一下
      redirect : "/Community/Academic",
      children : [
        {
          path : 'academic',
          name : "academic",
          component : () => import("../views/Academic")
        },
        {
          path : "download",
          name : 'download',
          component : ()=> import("../views/Download")
        },
        {
          path : "personal",
          name : 'personal',
          component : ()=> import('../views/Personal')
        }
      ]
    },
    {
      path : "/question/:id", // 此时为动态路由
      name : 'question',
      component : ()=> import('../views/Question')
    },
    {
      path : "/notfound",
      name : "notfound",
      component : () => import('../views/NotFound.vue')
    },
    {  // 判断路径是否有效，无效则弹出错误提示。
      path : "*",
      redirect (to){
        if(to.path === '/'){
          return "/Home"
        }else{
          return "/NotFound"
        }
      }
    }
  ]
})

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)  // 一定要有

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.

//     // 不在首页用懒加载提高效率 
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history', // 设置跳转页面的时候用/而不是#
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
