<template>
    <div class="student">
        <h2>学生名字：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
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
    }    
</script>

<style lang="css" scoped>
    .student{
        background-color: pink;
    }
</style>