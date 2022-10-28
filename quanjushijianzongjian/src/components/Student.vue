<template>
    <div class="student">
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click='unbind'>getStudentName事件</button>
    </div>
</template>


<script>
    export default {
        name:"Student",
        data(){
            return {
                name:'张三',
                sex:'男'
            }
        },
        methods:{
            sendStudentName(){
                // Student的vc想触发什么事件
                this.$emit('getStudentName',this.name,666,888,999)
                this.$emit('demo')

                // console.log('sendStudentName里面的this:',this)
            },
            unbind(){
                //解绑
                this.$off('getStudentName') //解绑一个自定义事件
                //解绑多个自定义事件
                // this.$off(['demo','getStudentName]'])
                this.$off() 
            },
    }
}    
</script>

<style lang="css" scoped>
    .student{
        background-color: rgb(241, 143, 160);
        padding: 5px;
        margin-top: 30px;
    }
</style>