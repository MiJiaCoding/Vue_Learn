<template>
    <div id="app">
        <School></School>
        <Student></Student>
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