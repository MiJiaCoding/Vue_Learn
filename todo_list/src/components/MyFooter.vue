<template>
    <div class="todo-footer" v-show="total">
        <label>
          <!-- <input type="checkbox":checked="isAll"@change="checkAll"/> -->
          <input type="checkbox" v-model="isAll"/>
        
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        // let i =0
        // this.todos.forEach((todo)=>{
        //   if (todo.done) i++
        // })
        // return i

        // const x= this.todos.reduce((pre,current)=>{
        //   //这个回调函数会执行todos.length长度次数，pre每次调用其那一次的返回值
        //   //最后一次调用的返回值将作为reduce的返回值
        //   // current 每次传入的todo项
        //   return pre+(current.done?1:0)
        // },0)
        return this.todos.reduce((pre,current)=>pre+(current.done?1:0),0)
      },
      // isAll需要修改，则不用简写形式
      isAll:{
        get(){
          return this.doneTotal===this.total  && this.total>0
        },
        set(value){
          // console.log("@@",value) // true or false
          this.checkAllTodo(value)// 这里的value等价于e.target.checked
        }
       
      },

    },
    methods:{
      // checkAll(e){
      //   console.log(e.target.checked)
      //   this.checkAllTodo(e.target.checked)
      // },
      clearAll(){
        this.clearAllTodo()
      },
    }
};
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>