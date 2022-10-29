<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">

        <!-- <MyHeader :addTodo="addTodo"></MyHeader> -->
        <MyHeader @addTodo="addTodo"></MyHeader>

        <!-- 父亲App给儿子 list传，  儿子list还要去接收-->
        <!-- <MyList :todos="todos":checkTodo="checkTodo":deleteTodo="deleteTodo"></MyList> -->
        <MyList :todos="todos"/>

        <MyFooter :todos="todos" @checkAllTodo='checkAllTodo' @clearAllTodo="clearAllTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data(){
    return{
      // todos:[
      //   {id:'001',title:'抽烟',done:true},
      //   {id:'002',title:'喝酒',done:false},
      //   {id:'003',title:'烫头',done:true},
      // ]     
      todos:JSON.parse(localStorage.getItem('todos'))||[],
    }
  },

  methods:{
    // 添加一个todo
    addTodo(todoObj){
      console.log("我是App组件,我收到了数据:",todoObj)
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.done = !todo.done
        }
      })
    },
    //删除一个todo
    // deleteTodo(id){
    //   // this.todos=this.todos.filter((todo)=>{
    //   //   return todo.id!==id
    //   this.todos=this.todos.filter(todo=>todo.id!==id)
    // },
    deleteTodo(_,id){
      //_占个位(消息订阅里面的消息名msgName)不需要用
      this.todos=this.todos.filter(todo=>todo.id!==id)
    },
    //全选or取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done=done
      })
    },
    //清除所有已经完成的todo
    clearAllTodo(){
      this.todos=this.todos.filter(todo=>!todo.done)
    },
    //更新一个todo
    updateTodo(id,title){
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.title=title
        }
      })
    },
  },
  watch:{
    // // 监视不到数组里面的，所以要开启深度监视，不用简写方式
    // todos(value){
    //   // localStorage.setItem('todos',value)
    //   localStorage.setItem('todos',JSON.stringify(value))
    // }

    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))

      }
    }
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    // this.$bus.$on('deleteTodo',this.deleteTodo)
    this.$bus.$on('updateTodo',this.updateTodo)

    this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    // this.$bus.$off('deleteTodo')
    this.$bus.$off('updateTodo')

    pubsub.unsubscribe(this.pubId)
  }
}
</script>


<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  
  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(76, 114, 129);
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

 

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }


 

</style>