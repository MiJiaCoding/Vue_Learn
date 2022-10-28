<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校名称：{{address}}</h2>
        
    </div>
</template>


<script>
    export default {
        name:"School",
        props:['getSchoolName'],
        data(){
            return {
                name:'尚硅谷',
                address:'北京',
            }
        },
        mounted(){
            // School组件想接收数据，则在School组件中给$bus绑定自定义事件，
            // 事件的回调留在A组件自身
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件,收到了数据',data)
            })
        },
        beforeDestroy(){
            this.$bus.$off('hello')
        }
    }    
</script>


<style>
    .school{
        background-color: orange;
        padding: 5px;
    }
</style>