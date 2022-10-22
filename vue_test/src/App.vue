<template>
    <div id="app">
        <School></School>
        <Student name="李四" sex="女" v-bind:age="19"></Student>
        <!-- <Student name="王老五" sex="男" :age="25"></Student> -->
        <Student name="王老五" sex="男" ></Student>
    
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'


export default {
    name: 'App',

    components:{
        School,
        Student,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>