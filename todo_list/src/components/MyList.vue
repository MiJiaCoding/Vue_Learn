<template>
    <ul class="todo-main">
        <!-- <MyItem></MyItem>
        <MyItem></MyItem>
        <MyItem></MyItem>
        <MyItem></MyItem> -->
 
        <!--写了 ' : ' ， " "才是表达式, 才能读到 -->
        <MyItem
          v-for = "todoObj in todos" 
          :key="todoObj.id" 
          :todo="todoObj" 
        />
         
      </ul>
</template>

<script>

import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    components:{MyItem},
    // // 接受父亲App 传入的todos
    // props:['todos','checkTodo','deleteTodo'],
    props:['todos'],
  
};
</script>

<style scoped>

  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>