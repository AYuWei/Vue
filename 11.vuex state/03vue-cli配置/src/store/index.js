import Vue from 'vue'
import Vuex from 'vuex'
import student from "./student"
import learn from "./learn"

Vue.use(Vuex); // 在此方法中绑定了 $store state  $store.state.name

export default new Vuex.Store({
  // strict : true, // 开启严格模式

  strict : process.env.NODE_ENV !== "production",
  modules: {
    student,
    learn
  }
})
