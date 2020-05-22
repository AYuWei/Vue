export default{
     //  放置我们需要用到的元素信息。
  state: {
    name : "yuwei",
    age : 18,
    look : "beautiful",
    studentList : []
  },
  getters:{
    // 此时这个就是是计算属性一项
    // state为上面的state
    person(state){
      return `姓名：${state.name} 年龄：${state.age}`
    },
    newStudentList(state,getters){
      // return state.studentList.map(student => `姓名：${student.name} 年龄：${student.age}-${getters.person}`)
      return state.studentList.map(student => `姓名：${student.name} 年龄：${student.age}`)
    }
  },

  // 更改状态的。 state
  mutations: {
    // changeStudenList (state,payload){
    //   state.studentList.push(payload)
    // }

    //  这里的子要和修改的值一样，比如说obj改为newpay则不行、

    changeStudentList (state,{obj, name}){
       state.studentList.push(obj);
       state.name = name;
    }
  },
  // 可执行异步代码
  actions: {
    changeStudentList( {commit}, payload){
      setTimeout(()=>{
        commit("changeStudentList",payload);
      },1000)
    }
  },
}