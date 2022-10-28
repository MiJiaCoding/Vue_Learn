<template>
    <div class="student">
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
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
                this.$bus.$emit('hello',this.name)
            }
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