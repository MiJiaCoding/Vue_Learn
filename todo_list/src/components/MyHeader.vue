<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>

import {nanoid} from 'nanoid'

export default {
    name: 'MyHeader',
    props:['addTodo'],
    methods:{
        add(){
            // console.log(e.target.title)

            //校验数据
            if (!this.title.trim()) return alert("输入不能为空")

            //将用户的输入包装成一个todo对象
            const todoObj = {id:nanoid(),title:this.title,done:false}
        
            //通知App组件去添加一个todo对象
            this.addTodo(todoObj)

            //清空输入
            this.title=''
        }
    },
    data(){
        return{
            title:'',
        }
    },


};
</script>

<style  scoped>
     /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

</style>