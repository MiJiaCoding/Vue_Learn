<<template>
    <div>
        <School></School>
        <Studnet></Studnet>
    </div>
</template>

<script>

    //引入组件
    import School from './components/School.vue'
    import Student from './components/Student'


export default {
    name: 'App',
    template:`App`,
    components:{
        School,
        Student,
    },

    data() {
        return {
            msg:'你好啊！'
        };
    },
};
</script>

<style lang="css" scoped>
    .app{
        background-color:gray;
    }
</style>