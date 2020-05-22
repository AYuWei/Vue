<template>
  <div class="question">
    <h1>
      问题 : {{ questionContent }}
      <span class="span" v-show="flagup" @click="handleClickup">上一问题</span>
      <span class="span" v-show="flagdown" @click="handleClickdown">下一问题</span>
    </h1>
  </div>
</template>

// 父目录 Academic.vue
<script>
export default {
  mounted() {
      const id = this.$route.query["id"];
    // const id = this.$route.params["id"];
    this.getId(id,null,null);
  },
  methods: {
    handleClickup() {
      this.$router.push({
        name: "question",
        params: {
          id: this.questionId - 1
        }
      });
    },
    handleClickdown(){
        this.$router.push({
            name : "question",
            params : {
                id : this.questionId + 1
            }
        })
    },
    getId(id,to,from) {
      const index = this.questionList.findIndex(item => item.questionId === id);
      if(index !== -1){
        this.questionId = id;
        this.questionContent = this.questionList[index].title;
      }else{
          this.questionContent = "已经没有问题了哦！",
          this.flagup = false;
          this.flagdown = false;
      }
     
    }
  },
  //  路由变了（url）,但是还是用到这个组件。
  beforeRouteUpdate(to, from, next) {
    const id = to.params["id"];
    this.getId(id, to,from);
    next();
  },
  data() {
    return {
      flagup: true,
      flagdown : true,
      questionContent: "",
      questionId: null,
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  }
};
</script>

<style scoped>
.span {
  cursor: pointer;
  font-size: 12px;
  padding: 0px 10px 0px 10px;
  color: rgb(116, 1, 1);
}
</style>