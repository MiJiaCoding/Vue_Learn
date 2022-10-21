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
    componets:{
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