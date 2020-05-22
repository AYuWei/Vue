import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render(h){
  //   return (
  //     <h1 class="haha" style={{color:"red",fontSize:"14px"}}
  //       on-click={()=>{console.log(1)}}
  //     >我是一个h1标题</h1>
  //   )
  // }
}).$mount('#app')
