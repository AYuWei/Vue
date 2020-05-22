**重要**

## 全局守卫 （在main里面使用，守卫整体）
- router.beforeEach 守卫每一个路径
- router.beforeResolve 路由加载完成执行
- afterEach 路由解析完成执行。

## 路由独享守卫（在router里面使用，只能守卫一个路径）
- beforeEnter 

## 组件内守卫（在组件内部使用）
- beforeRouteLeave 当离开这个路径时执行  Personal.vue用到
- beforeRouteEnter 路由将要进来。
- beforeRouteUpdate mounted  动态路由用到 Question.vue用到
- to from next 

> beforeRouterLeave 和 beforRouteUpdate 的区别？
beforeRouterLeave切换路由，不使用现在的组件了。
beforeRouterUpdate切换路由，但是还使用这这个组件。

**全局守卫和独享守卫和组件守卫执行顺序**
- beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach 

# 动态路由（）
- /question/:id  动态路由  Academic question用到。
- this.$route.params.xxx  匹配拿到路由的值 
- this.$route.query.xxx  只是通过问号去传递
