<template>
    <div>
        <h2>学生名字：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>


<script>
    export default {
        name:"School",
        data(){
            return {
                name:'张三',
                age:'18'
            }
        },
   
    }    
</script>

