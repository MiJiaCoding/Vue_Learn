# 配置

vscode颜色主题是： **Atom One Dark Theme**

![1665198457693](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665198457693.png)





**zoomit**

演示必备辅助软件 *ZoomIt*（主页|介绍）是一款非常实用的投影演示辅助软件

可以写字演示



**keycastow**

实现案件提示功能（显示于屏幕）



**uTools**

效率工作平台，设置快捷键快速打开软件？

![1665477225476](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665477225476.png)





#10/7/22 0.Vue简介



![1665148020278](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148020278.png)

##vue 是什么？



![1665148081616](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148081616.png)





## 谁开发的？

![1665148111448](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148111448.png)


##Vue的特点

![1665148519442](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148519442.png)



![1665148216436](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148216436.png)





![1665148235194](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148235194.png)



命令式编码：一步一步的指挥你

![1665148260368](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148260368.png)







![1665148295344](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148295344.png)







![1665148386910](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148386910.png)



![1665148470109](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148470109.png)

原生js麻烦 ，需要写判断才能把新的加入，否则就是直接覆盖



Diff算法比较

![1665148696423](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148696423.png)





![1665148711422](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665148711422.png)





在Network 里面 ，shift+F5 （强制刷新）

5500端口是Live Server插件自动开的一个端口

![1665194232556](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665194232556.png)







此处看Vue结构的

![1665195965593](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665195965593.png)





# 1.初识Vue

初识vue:
1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象;

2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语

法;

3.root容器里的代码被称为【Vue模板】;

4.Vue实例和容器是一一对应的;

5.真实开发中只有一个Vue实例,并且会配合着组件一起使用;

6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性:

7.一旦**data**中的数据发生改变，**那么页面中用到该数据的地方也会自动更新**;





注意区分js表达式和js代码（语句）

1.表达式：一个表达式会生成一个值，可以放在任何一个需要值的地方

（1）. a 	(2) . a+b （3）.  demo(1) （这个是undefine）(4). x===y?'a':'b'

2.js 代码(语句)

(1).if(){}

(2).for(){}





# 2.Vue模板语法

Vue模板语法有2大类:
1.插值语法:
功能:用于解析标签体内容。
写法:{{ok}}，xxx是js表达式，且可以直接读取到data中的所有属性。



2.指令语法:I
功能:用于解析标签（包括:标签属性、标签体内容、绑定事件.....）。
举例: v-bind :href="xxx”或简写为:href="xxx"，xxx同样要写js表达式,
且可以直接读取到data中的所有属性。
备注: Vue中有很多的指令，且形式都是: v-????，此处我们只是拿v-bind举个例



# 3.数据绑定

v-model 双向绑定

v-bind 单项绑定

Vue中有2种数据绑定的方式:

1.单向绑定(v-bind):数据只能从data流向页面。

2.双向绑定(v-model):数据不仅能从data流向页面，还可以从页面流向data.备注:

1.双向绑定一般都应用在表单类元素上（如: input、 select等)

2.v-model:value 可以简写为v-model，因为v-model默认收集的就是value值。

![1665221496485](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665221496485.png)





```vue
 <div id="root">
        单向数据绑定：<input type="text" v-bind:value="name">
        双向数据绑定：<input type="text" v-model:value="name">
    
        <!--简写！-->
        单向数据绑定：<input type="text" :value="name">
        双向数据绑定：<input type="text" v-model="name">

        <!--下面是错误的。
        只有都有value才能进行
    
    所以v-model只能应用在表单类元素-->
        <!-- <h2 v-model:x="name">你好啊</h2> -->
    </div>
```



# 4.el与data的两种写法



data与el的2种写法

1.el有2种写法
(1).new Vue时候配置el属性。

(2).先创建Vue实例，随后再通过vm.$mount( ' #root ')指定el的值。

2.data有2种写法

(1).对象式(2).函数式
如何选择:目前哪种写法都可以，以后学习到组件时，data必须使川函数式，否则会报错。

3.一个重要的原则:

由Vue管理的函数，一定不要写箭头函数，一旦写了债头函数，this就不再是Vue实例了。



![1665222735953](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665222735953.png)





$mount 挂载

![1665223270178](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665223270178.png)





# 5.MVVM模型

MVVM模型

1. M:模型(Model) : data中的数据
2.  V:视图(View):模板代码
3. .VM:视图模型(ViewModel): Vue实例

观察发现:

1. data中所有的属性,最后都出现在了vm身上。
2. vm身上所有的属性及 Vue原型上所有属性，在Vue模板中都可以直接使用。

![1665279064751](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665279064751.png)



我们写的name，address，a 经过一系列处理，到了vm实例上。

我们console.log(vm)

能够看到

![1665279317972](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665279317972.png)

我们写的name，address，a 经过一系列处理，到了vm实例上。

我们console.log(vm)

能够看到这些。



![1665279546364](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665279546364.png)



# 10/9/22 6.数据代理

## 回顾Object.defineProperty方法

### I.直接定义属性 和 defineProperty定义的区别



![1665280353677](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665280353677.png)



age 颜色比较淡 为什么呢？

```js
 <script>
        let person={
            name:'张三',
            sex:'男',
        }

        // 如果报错 说明用错了方法
        // 不是defineProperties
        // Property description must be an object: a at Function.defineProperties (<anonymous>)
        Object.defineProperty(person,'age',{
            value:18
        })
        console.log(person)
        console.log("通过defineProperty向person加入age:")
        console.log (Object.keys(person))
    </script>
```



age不可以被遍历到

![1665280482619](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665280482619.png)

除非加上 

```javascript
enumerabele:true//控制属性是否可以枚举，默认是false
```

```javascript
// 如果报错 说明用错了方法
        // 不是defineProperties
        // Property description must be an object: a at Function.defineProperties (<anonymous>)
        Object.defineProperty(person,'age',{
            value:18,
            enumerable:true,//控制属性是否可以枚举，默认是false
        })
```



![1665280660402](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665280660402.png)

同理还有其他的一些常用的如：

### II .enumerable、writable、configurable等控制属性

writable

configurable

等...

+ enumerable:true,//控制属性是否可以枚举，默认是false
+ writable:true,//控制属性是否可以被修改，默认是false
+ configurable:true,//控制属性是否可以被删除，默认是false

​         



### III.get 和set 读取和修改属性的值



下面是get and set 函数



定义一个let number=18

通过 get函数return number

```javascript
        let number=18
        let person={
            name:'张三',
            sex:'男',
            //age:18

        }   


Object.defineProperty(person,'age',{
            // value:18,
            // enumerable:true,//控制属性是否可以枚举，默认是false
            // writable:true,//控制属性是否可以被修改，默认是false
            // configurable:true,//控制属性是否可以被删除，默认是false
            //当有人读取person 的属性时候,get函数就会被调用,且返回值就是age的值
            get:function(){
                console.log("有人读取age属性了:")
                return number
            }
```



![1665282136343](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665282136343.png)







![1665282667337](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665282667337.png)





**加入set（）函数**

```javascript
            // 当有人修改person的age属性时，set函数（setter）就会被调用，且会收到修改的具体值
            set(value){
                console.log("有人修改了age属性,且值是",value)
                number=value
            }
```

​	![1665282725818](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665282725818.png)

## 何为数据代理？

```html
<body>
      <!---数据代理：通过一个对象代理对另一个对象中的属性的操作(读/写)-->
    <script>
        let obj={x:100}
        let obj2={y:999}

        Object.defineProperty(obj2,'x',{
            get(){
                return obj.x
            },
            set(value){
                obj.x=value
            }
        })
    </script>

</body>
```



![1665289448039](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665289448039.png)





## Vue中的数据代理





   1.Vue中的数据代理:

> 通过vm对象来代理data对象中属性的操作（读/写)

​    2.vue中数据代理的好处:

>    更加方便的操作data中的数据

​    3.基本原理;

>    通过object.defineProperty()把data对象中所有属性添加到vm 上.为每一个添加到vm上的属性,都指定一个getter/setter.

​    在getter/setter内部去操作（读/写）data中对应的属性。



![1665310602676](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665310602676.png)







```html
<body>
    <!---数据代理：通过一个对象代理对另一个对象中的属性的操作(读/写)-->
    <!--准备好一一个个容器-->
    <div id="root">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</body>


<script>
    Vue.config.productionTip = false;

    const vm=new Vue({
        el:'#root',
        data:{
            name:'尚硅谷',
            address:'宏福科技园',
        }
    })
    console.log(vm)
</script>
```



这里显示Invoke property getter

说明data里面name 和address是用Object.defineProperty写的

![1665307129993](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665307129993.png)







![1665307139310](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665307139310.png)





下面来验证data.name 和 vm.name是不是一样的

data.name 直接拿不到，我们直接let 一个data 

![1665309326850](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665309326850.png)

```html
<body>
    <!---数据代理：通过一个对象代理对另一个对象中的属性的操作(读/写)-->
    <!--准备好一一个个容器-->
    <div id="root">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</body>


<script>
    Vue.config.productionTip = false;
    let data= {
        name:'尚硅谷',
        // name:'atguigu',
        address:'宏福科技园',
    }
        
    
    const vm=new Vue({
        el:'#root',
        // data:{
        //     name:'尚硅谷123',
        //     // name:'atguigu',
        //     address:'宏福科技园',
        // }
        data
    })
    console.log(vm)
    console.log("vm._data===data 是否成立？",vm._data===data)
</script>
</html>
```





# 7.事件处理



## I.事件的基本使用

1.使用v-on :xxx或@xxx绑定事件,其中xxx是事件名;

2.事件的回调需要配置在methods对象中，最终会在vm 上;

3.methods中配置的函数，**不要用箭头函数**!否则this就不是vm了;

4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象;

5.@click="demo”和@click="demo($event)”效果一致，但后者可以传参;





**方法showInfo1()也可以放在data中，此时vue会对这个方法也进行数据代理，这是我们所不需要的，我们对于方法只需要调用即可，对于一些数据进行数据代理是为了让我们能很方便更改数据**

```javascript
<script>
    Vue.config.productionTip = false;
        
    
    const vm=new Vue({
        el:'#root',
        data:{
            name:'尚硅谷',
            address:'宏福科技园',
            // 方法也可以放在data中，此时vue会对这个方法也进行数据代理，这是我们所不需要的，我们对于方法只需要调用即可，对于一些数据进行数据代理是为了让我们能很方便更改数据
            // showInfo1(event){
                // alert("同学你好1")
            //},
        },
        methods:{
            // 普通函数 vm
            showInfo(event){
                console.log(event.target)
                console.log(event.target.innerText)
                console.log(this)
                console.log(this===vm)

                // alert("同学你好")
                // console.log(a,b,c,d)
            },
            //箭头函数  window
            showInfo:(eve )=>{
                console.log("用箭头函数下的this是什么?:",this)
            },
            showInfo1(event){
                // alert("同学你好1")
            },
            showInfo2(event,number){
                console.log(event,number)
                // alert("同学你好2")
            }
        }
 
    })
</script>
```



## II.事件修饰符

Vue中的事件修饰符:
1.prevent:阻止默认事件（常用）;2.stop:随止事件冒泡（常用）;3.once:事件只触发一次（常用）;4.capture:使用事件的捕获模式;
5.self:只有event.target是当前操作的元素是才触发事件;
6.passive:事件的默认行为立即执行，无需等待事件回调执行完毕;



## III.键盘事件

1.Vue中常用的按键别名:

> 回车=>enter
>
> 删除=> delete(捕获“删除”和“退格”键)
>
> 退出=>esc
>
> 空格=>space
>
> 换行=>tab
>
> 上 => up
>
> 下=>down
>
> 左=>left
>
> 右=> right

2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名)

3.系统修饰键（用法特殊): ctrl、alt、shift、 meta

(1).配合keyup使用:按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发.

(2).配合keydown使用:正常触发事件。

4.也可以使用keyCode去指定具体的按键（不推荐)

5.Vue.config.keyCodes.自定义键名=键码，可以去定制按键别名





tab 按键不用keyup 应为会抬起的时候会切换焦点

**tab于 keydown用！！！！**

ctrl+任意按键同时按在keyup时才有用

也可以这样用：@keyup.ctrl.y 表示只用同时按住ctrl和y才有效果过





# 10/11/22 8.计算属性	computed

计算属性:

1.定义:要用的属性不存在，要通过**已有属性**计算得来。

2.原理:底层借助了**objcet.defineproperty**方法提供的getter和setter。

3.get函数什吆时候执行?

(1).**初次读取时会执行一次**。

(2).当依赖的数据发生**改变时**会被再次调用。

4.优势:与methods实现相比，内部有**缓存**机制（复用），效率更高，调试方便。

5.备注:

1.**计算属性**最终会出现在vm上，**直接**读取使用即可。

正确：{{fullName}}

**(千万不要写成 {{fullName.get()}})**



2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生变化

```javascript
        computed:{
            //完整写法

        //     fullName:{
        //         get(){
        //             console.log('get被调用了')
                    
        //             return this.firstName+'-'+this.lastName
        //         },
        //         set(value){
        //             console.log("set",value)
        //             const arr=value.split('-')
        //             this.firstName=arr[0]
        //             this.lastName=arr[1]
        //         }
        //     }
        
        // //简写1
        // fullName:function(){
        //     console.log('get被调用了')
        //     return this.firstName+'-'+this.lastName
        // },

        //再简写
        fullName(){
            console.log('get被调用了')
            return this.firstName+'-'+this.lastName
        }
```



##  1.姓名案例_插值语法实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        姓:<input type="text" v-model="firstName"><br/>
        名:<input type="text" v-model="lastName"><br/>
        <!-- 全名:<span>{{firstName+'-'+lastName}}</span> -->
        全名:<span>{{firstName.slice(0,3)}}-{{lastName}}</span>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            firstName:'张',
            lastName:"三",
        },
        methods:{

        }
    })
</script>
</html>

```



##2.姓名案例methods方法实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        姓:<input type="text" v-model="firstName"><br/>
        名:<input type="text" v-model="lastName"><br/>
        <!--插值语法中，不加括号表示把函数插入，加小括号才是插入返回值-->
        全名:<span>{{fullName()}}</span>
        <!-- mothod 作为事件回调,小括号（）加不加都行-->
        <!-- <button @click="fullName()">点我</button> -->
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            firstName:'张',
            lastName:"三",
        },
        methods:{
            fullName(){
                // return "小猪佩奇"
                console.log("当你修改哦firstName或者lastName的时候fullName()函数会被多次调用！！！")
                console.log("修改一次,我就出现一次！")
                return this.firstName+'-'+this.lastName
            }
        }
    })
</script>
</html>

```



## 3.姓名案例计算属性实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名案例计算属性实现</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        姓:<input type="text" v-model="firstName"><br/><br/>
        名:<input type="text" v-model="lastName"><br/><br/>
        全名:<span>{{fullName}}</span><br/><br/>
        <!--vue自己做了一个缓存！！！ 后面再次计算fullName不用get（），直接从缓存中第哦啊用-->
        全名:<span>{{fullName}}</span><br/><br/>
        全名:<span>{{fullName}}</span><br/><br/>
        全名:<span>{{fullName}}</span><br/><br/>



    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            firstName:'张',
            lastName:"三",
        },
        methods:{

        },
        computed:{
            fullName:{
                //get有什么作用？当有人读取fullName是，get就会被调用。且返回值就作为fullName的值
                get(){
                    console.log('get被调用了')
                    
                    // 这样是拿不到的 return firstName+'-'+lastName

                    // console.log(this)
                    return this.firstName+'-'+this.lastName
                },
                //set()不是必须的
                //set()什么时候被修改？当fullName被修改时
                set(value){
                    console.log("set",value)
                    const arr=value.split('-')
                    this.firstName=arr[0]
                    this.lastName=arr[1]
                }
            }
        }

    })
</script>
</html>

```



## 4.姓名案例计算属性简写

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名案例计算属性实现</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        姓:<input type="text" v-model="firstName"><br/><br/>
        名:<input type="text" v-model="lastName"><br/><br/>
        全名:<span>{{fullName}}</span><br/><br/>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            firstName:'张',
            lastName:"三",
        },
        computed:{
            //完整写法

        //     fullName:{
        //         get(){
        //             console.log('get被调用了')
                    
        //             return this.firstName+'-'+this.lastName
        //         },
        //         set(value){
        //             console.log("set",value)
        //             const arr=value.split('-')
        //             this.firstName=arr[0]
        //             this.lastName=arr[1]
        //         }
        //     }
        
        // //简写1
        // fullName:function(){
        //     console.log('get被调用了')
        //     return this.firstName+'-'+this.lastName
        // },

        //再简写
        fullName(){
            console.log('get被调用了')
            return this.firstName+'-'+this.lastName
        }

    })
</script>
</html>

```



# 9.监视属性

1.当被监视的属性变化时,回调函数自动调用,进行相关操作

2.监视的属性**必须存在**，才能进行监视!!

3.监视的两种写法;

(1).**new Vue时传入watch配置**

(2).通过**vm.$watch**监视



深度监视:
(1).vue中的watch**默认不监测**对象**内部值的改变****(一层**）。

(2).配置deep:true可以监测对象内部值改变（**多层**）。

备注:
(1).vue自身可以监测对象内部值的改变，但Vue提供的watch**默认不可以**!

(2).使用watch时根据数据的具体结构,决定是否采用**深度监视**。



## 1.天气案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        <!-- <h2>今天天气{{isHot?'炎热':'凉爽'}}</h2> -->
        
        <h2>今天天气{{info}},{{x}}</h2>
        <!--绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句-->
        <!-- <button @click='isHot=!isHot;x++'>切换天气</button> -->
        <button @click="changeWeather">切换天气</button>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。
    Vue.config.devtools = true

    const vm = new Vue({
        el:"#root",
        data:{
            isHot:true,
            x:1,
        },

        methods:{
            changeWeather(){
                this.isHot=!this.isHot
                this.x++
            }
        },
        computed:{
            info(){
                return this.isHot?'炎热':'凉爽'
            }
        }
    })
</script>
</html>

```



## 2.监视属性watch

1.当被监视的属性变化时,回调函数自动调用,进行相关操作

2.监视的属性必须存在，才能进行监视!!

3.监视的两种写法;

(1).new Vue时传入watch配置

(2).通过vm.$watch监视







```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">      
        <h2>今天天气{{info}},{{x}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。
    Vue.config.devtools = true

    const vm = new Vue({
        el:"#root",
        data:{
            isHot:true,
            x:1,
        },
        methods:{
            changeWeather(){
                this.isHot=!this.isHot
                this.x++
            }
        },
        computed:{
            info(){
                return this.isHot?'炎热':'凉爽'
            }
        },
        watch:{
            isHot:{
                //immediate初始化时让handler调用一下
                immediate:true,
                //handler什么时候调用？当isHot被调用的时候
                handler(newValue,oldValue){
                    console.log("isHot被修改了",newValue,oldValue)
                }
            },
            //计算属性也是属性，也能被监测
            info:{
                //immediate初始化时让handler调用一下
                immediate:true,
                //handler什么时候调用？当isHot被调用的时候
                handler(newValue,oldValue){
                    
                    console.log("info被修改了",newValue,oldValue)
                }
            },
            
        }
    })


    // 监测写法2，创建实例时不知道检测谁，后续根据用户行为要增加监视的行为，则这样写
    vm.$watch('isHot',{
             //immediate初始化时让handler调用一下
             immediate:true,
                //handler什么时候调用？当isHot被调用的时候
                handler(newValue,oldValue){
                    console.log("isHot被修改了",newValue,oldValue)
                }
    })
</script>
</html>

```

## 3.深度监视 deep



深度监视:
(1).vue中的watch欧认不监测对象内部值的改变(一层）。

(2).配置deep:true可以监测对象内部值改变（多层）。

备注:
(1).vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以!

(2).使用watch时根据数据的具体结构,决定是否采用深度监视。



![1665491957438](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665491957438.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--深度监视:
(1).vue中的watch欧认不监测对象内部值的改变(一层）。
(2).配置deep:true可以监测对象内部值改变（多层）。
备注:
(1).vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以!
(2).使用watch时根据数据的具体结构,决定是否采用深度监视。
-->
    <!--准备一个容器-->
    <div id ="root">      
        <h2>今天天气{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
        <hr/>
        <h3>a的值是:{{numbers.a}}</h3>
        <button @click="numbers.a++">点我让a+1</button>
        <h3>b的值是:{{numbers.b}}</h3>
        <button @click="numbers.b++">点我让a+1</button>
        <button @click="numbers={a:666,b:999}">彻底替换掉a,b</button>
        {{numbers.c.d.e}}
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。
    Vue.config.devtools = true

    const vm = new Vue({
        el:"#root",
        data:{
            isHot:true,
            numbers:{
                a:1,
                b:1,
                c:{
                    d:{
                        e:100
                    }
                }
            }
        },
        methods:{
            changeWeather(){
                this.isHot=!this.isHot
          
            }
        },
        computed:{
            info(){
                return this.isHot?'炎热':'凉爽'
            }
        },
        watch:{
            isHot:{
                //immediate初始化时让handler调用一下
                // immediate:true,
                //handler什么时候调用？当isHot被调用的时候
                handler(newValue,oldValue){
                    console.log("isHot被修改了",newValue,oldValue)
                }
            },
            //不能写成number.a ，要写成字符串才是key，平常不屑""是因为那是简写
            'numbers.a':{
                handler(){
                    console.log("a被改变了")
                }
            },
            'numbers.b':{
                handler(){
                    console.log("b被改变了")
                }
            },

            //监视多级结构中所有属性的变化
            numbers:{
                deep:true,
                handler(){
                    console.log("被改变了")
                }
            },
          
            
        }
    })


</script>
</html>

```

## 4.天气案例深度监视简写

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
  
    <div id ="root">      
        <h2>今天天气{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。
    Vue.config.devtools = true

    const vm = new Vue({
        el:"#root",
        data:{
            isHot:true,
        },
        methods:{
            changeWeather(){
                this.isHot=!this.isHot
          
            }
        },
        computed:{
            info(){
                return this.isHot?'炎热':'凉爽'
            }
        },
        watch:{
            //正常写法
            isHot:{
                // immediate初始化时让handler调用一下
                // immediate:true,
                //深度监视
                // deep:true,
                //handler什么时候调用？当isHot被调用的时候
                handler(newValue,oldValue){
                    console.log("isHot被修改了",newValue,oldValue)
                }
            },
            // //简写
            // isHot(newValue,oldValue){
            //     console.log("isHot被修改了",newValue,oldValue)
            // }
            
        }
    })

    // vm.$watch('isHot',{
    //        //immediate初始化时让handler调用一下
    //        immediate:true,
    //         // 深度监视
    //         deep:true,
    //         handler(newValue,oldValue){
    //             console.log("isHot被修改了",newValue,oldValue)
    //     }
    // })
     // 简写
    vm.$watch('isHot',function(newValue,oldValue){
        console.log("isHot被修改了",newValue,oldValue)
    })
    
    //不能写成箭头函数，那样this就是window 不是vue了
    // vm.$watch('isHot',(newValue,oldValue)=>{
    //     console.log("isHot被修改了",newValue,oldValue)
    // })

</script>
</html>

```





##  重点：姓名案例computed和watch两种写法对比

computed和lwatch之间的区别:

1.computed能完成的功能,watch都可以完成。

2.watch能完成的功能，**computed不一定能完成**，例如: **watch可以进行异步操作**。

两个重要的小原则:

1.所**被Vue管理**的函数，最好写成**普通函数**，这样**this的指向才是vm** 或组件实例对象。

⒉.所有**不被Vue所管理**的函数（**定时器的回调函数、ajax的回调函数、promise的回调函数**等），最好写成**箭头函数**，这样this的指向才是vm或组件实例对象。



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名案例计算属性实现</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        姓:<input type="text" v-model="firstName"><br/><br/>
        名:<input type="text" v-model="lastName"><br/><br/>
        全名:<span>{{fullName}}</span><br/><br/>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            firstName:'张',
            lastName:"三",
            // 用computed不用在data中定义fullName
            // 如果是用watch 则需要自己定义fullName
            fullName:"张-三"
        },
        computed:{
        //简写
        fullName(){
            //计算属性中不能开启异步任务去维护数据
            console.log('get被调用了')
            //靠返回值
            return this.firstName+'-'+this.lastName
            }
        },
        watch:{
            // 不需要deep 不需要immediate，可以用简写
            firstName(newValue,oldValue){
                // console.log(this)

                // this.fullName=newValue+'-'+this.lastName
                
                //监视里面可以写异步
                //定时器虽然是在vue所管理的fullName函数中开启的，但是定时器所指定的回调不受vue控制。
                //由浏览器定时器管理模块控制的，到点了，js引擎帮你调
                // 定时器要用箭头函数
                setTimeout(() => {
                    this.fullName=newValue+'-'+this.lastName
                }, 1000);
            },
            lastName(newValue,oldValue){
                // console.log(this)
                this.fullName=this.firstName+'-'+newValue
            }
        }
})  
</script>
</html>

```

## 箭头函数this和普通函数this指向问问题  js（不会）



# 10/12/22 10.绑定样式



## 1.绑定style样式

```html
:class
```

### I.绑定class样式-字符串写法



![1665575253270](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665575253270.png)



###II.绑定class样式-数组写法



![1665575984035](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665575984035.png)

![1665575989009](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665575989009.png)





### III.绑定class样式-对象写法

![1665575949138](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665575949138.png)

通过classObj 直接直接修改true or false

![1665576294548](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665576294548.png)





不要用这种写法，这样写死了（vm上没有）

![1665576118369](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665576118369.png)



## 2.绑定style样式

### III.绑定style样式-对象写法

![1665577773988](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665577773988.png)



### II.绑定style样式-数组写法

![1665577770124](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665577770124.png)