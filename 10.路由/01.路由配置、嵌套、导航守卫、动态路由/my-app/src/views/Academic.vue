<template>
  <div class="academic">
      <ul>
          <!-- 点击让他进行调整则用router-link -->
          <!-- to 中的name名称必须和匹配的要一致。 动态路由的时候不能是有path，使用path不管用。 -->
          <!-- :to="{name: 'question', params:{id : item.questionId}}" -->
          <router-link    
          :to="{name: 'question', query:{id : item.questionId}}"
          tag="li"
          v-for="item in questionList" 
          :key="item.questionId"
          >
              {{item.title}}
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
};

</script>

<style scoped>
    li {
        padding: 10px;
        cursor: pointer;
    }
</style>