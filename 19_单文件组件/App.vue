<<template>
    <div>
        <School></School>
        <Studnet></Studnet>
    </div>
</template>

<script>

    //引入组件
    import School from './School.vue'
    import Student from './Student'


export default {
    name: 'App',
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