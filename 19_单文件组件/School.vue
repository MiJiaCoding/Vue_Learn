<template>
    // 组件结构
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校名称：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>


<script>
    // // 1.直接暴露
    // export const school=Vue.extend({
    //     data(){
    //         return {
    //             name:'尚硅谷',
    //             address:'北京昌平',
    //         }
    //     },
    //     methods:{
    //         showName(){
    //             console.log("showName",this)
    //         }
    //     }
    // })

    // //2.统一暴露
    // export {school}
    // //3.默认暴露
    // export default school


    export default {
        name:"School",
        data(){
            return {
                name:'尚硅谷',
                address:'北京昌平',
            }
        },
        methods:{
            showName(){
                console.log("showName",this)
            }
        }
    }
    }

  
    
</script>


<style>
    .demo{
        background-color: orange;
    }
</style>