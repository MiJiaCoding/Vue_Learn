<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <!--通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
        <School :getSchoolName="getSchoolName"></School>

        
        <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
        <!--第一种写法-->
        <Student v-on:getStudentName="getStudentName" v-on:demo="demo"></Student>
        <!-- <Student @getStudentName.once="getStudentName"></Student> -->
        
        <!--第二种写法-->
        <!-- <Student ref="student"/> -->

    </div>
</template>

<script>

    //引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'


export default {
    name: 'App',
    // template:`App`,
    components:{
        School,
        Student,
    },

    data() {
        return {
            msg:'你好啊！'
        };
    },
    methods:{
        getSchoolName(name){
            console.log("App收到了学校名:",name)
        },
        getStudentName(name,...params){
            console.log("App收到了学生名:",name,params)
        },
        demo(){
            console.log("我是学生事件定义的第二个事件（用来实测解绑的）")
        }
    },
    mounted(){
        // mounted()写在哪个组件里面就是哪个组件挂载完毕
        // this.$refs.student.$on('getStudentName',this.getStudentName)
        // setTimeout(() => {
        // this.$refs.student.$on('getStudentName',this.getStudentName)
        // }, 3000);
        // this.$refs.student.$once('getStudentName',this.getStudentName)
    }
};
</script>

<style lang="css" scoped>
    .app{
        background-color:gray;
        padding: 5px;
    }
</style>