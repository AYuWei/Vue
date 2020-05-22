## store(仓库)

我们在页面的时候有一两个元素供用一个信息的话，用**路由**是够的，但是我们有成百上千处需要用到的话，那就不合适了。

我们需要借助**store（仓库）**来储存。

安装
> vue add vuex

import { mapState } from 'vuex';
mapState(['name','age']); 返回一个对象，拿到库中的值，想要那个就添加那个



## state
- this.$store.state.xxx  获取值
- mapState(['xxx'])   获取值
- mapState({          获取值
  newXXX: state => state.xxx
})

## getters  获取state里面的信息。
- this.$store.getters.xxx  获取值
- mapGetters(['xxx'])  获取值
- mapGetters({  获取值   ---  大小写敏感
  newXXX: 'xxx'
})
- getters: {  获取值第二个参数。
  func(state, getters) {
    return 'xxx'
  }
}

## mutations
- 改变vuex中的状态。
- 只能执行同步的。
- this.$store.commit("xxx")
- mapMutations(["xxx"])
- mapMutations({
  newXXX : "xxx"
})

## actionsk
- 提交mutation，让mutation去改变状态。
- 能够执行异步
- mapActions(["xxx"])
- mapActions({
  newXXX : "xxx"
})