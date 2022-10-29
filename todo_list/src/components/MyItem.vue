<template>
    <li>
        <label>
          <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
          <span v-show="!todo.isEdit">{{todo.title}}</span>
          <input 
          type="text" 
          v-show="todo.isEdit" 
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle"
          >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
      </li>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
    name: 'MyItem',
    // 声明接收todo对象
    // props:['todo','checkTodo','deleteTodo'],
    props:['todo'],

    data() {
        return {
            
        };
    },
    methods: {
        // 勾选or取消勾选
        handleCheck(id){
          //通知App组件将对应的todo对象的done值取反
          // this.checkTodo(id)
          this.$bus.$emit('checkTodo',id)
        },
        // 删除
        handleDelete(id){
          if(confirm('确定删除吗?')){
            // this.deleteTodo(id)
            // this.$bus.$emit('deleteTodo',id)
            pubsub.publish('deleteTodo',id)
          }
        },
        // 编辑
        handleEdit(todo){
          // todo.isEdit=true //这样不是响应式 错误！！
          // this.$set(todo,'isEdit',true)
          // console.log(todo)
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit=true
          }else{
            this.$set(todo,'isEdit',true)
          }
          // 顺序上的问题 vue设定是执行这个handleEdit这个ifelse后不是立即去解析模板，而是接着执行后面的语句
          // 不直接用this.$refs.inputTitle.focus()
          // 可用定时器解决，但还是推荐用nextTick
          // setTimeout(()=>{
          //   this.$refs.inputTitle.focus()

          // },200)
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })
  
        },
        // 事情去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
          // todo上面已经有了isEdit 不用在$set了
          todo.isEdit=false
          if(!e.target.value.trim()) return alert('输入不能为空!')
          this.$bus.$emit('updateTodo',todo.id,e.target.value)// 不是todo.title，应该拿到input里面最新的值用 e.target.value
        }
    },
};
</script>

<style scoped>
 /*item*/
 li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }

</style>