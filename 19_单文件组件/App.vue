<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>

    //引入组件
    import School from './School.vue'
    import Student from './Student'


export default {
    name: 'App',
    template:`App`,
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