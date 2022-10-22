<template>
    <div>
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>


<script>
    export default {
        name:"Student",
        data(){
            console.log(this)
            return {
                msg:'我是一个学生',
                myAge:this.age,
            }
        },
        methods:{
            updateAge () {
                this.myAge++


                //不能直接修改props里面的age,要复制一份到data,在u修改
                // this.age=55 // 不能这样
         
                
            },
        },
        // 简单接收
        // props:['name','age','sex'],

        // // 接受的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String,
        // },

        //接受的同时对数据进行类型限制+默认值的制定+必要的限制
        props:{
            name:{
                type:String,//name类型是字符串
                required:true,//name是必要的
                //required 和 default 一般不一起写 没有意义
            },
            age:{
                type:Number,
                default:99 //默认值
            },
            sex:{
                type:String,
                required:true,
            }
        }
    }    
</script>

