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



vetur

识别.vue

![1666237533238](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666237533238.png)



# 小技巧

console.log() 方法

用于在 console 窗口中输入信息。在调试时，可以替代 alert() 或 document.write() 输入需要输出的内容

console.dir() 方法
用来对一个对象进行检查(inspect)，并以易于阅读和打印的格式显示。该方法对于输入 DOM 对象非常有用，因为 dir 方法会显示DOM对象的所有属性

打开控制台，在 Console 中分别输入 console.log(Promise) 和 console.dir(Promise) 可以看到一个输出的是 HTML 结构，一个类似于 JSON 结构,




![1666228739001](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666228739001.png)



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



# 3.数据绑定v-model v-bind 

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





# 7.事件处理 v-on:xxx或@xxx



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

1.prevent:阻止默认事件（常用）;

2.stop:随止事件冒泡（常用）;

3.once:事件只触发一次（常用）;

4.capture:使用事件的捕获模式;

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



# 9.监视属性 watch

1.当被监视的属性变化时,回调函数自动调用,进行相关操作

2.监视的属性**必须存在**，才能进行监视!!

3.监视的两种写法;

(1).**new Vue时传入watch配置**

(2).通过**vm.$watch**监视



深度监视:
(1).vue中的watch**默认不监测**对象**内部值的改变****(一层**）。

(2).配置deep:true可以监测对象内部值改变（**多层**）。

备注:
(1).vue自身可以**监测对象内部值的改变**，但Vue提供的watch**默认不可以**!

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



绑定样式:
1. class样式

  > 写法:class="xxx"xxx可以是字符串、对象、数组。

  > **字符串写法**适用于:类名不确定，要动态获取。

  > **对象写法**适用于:要绑定多个样式，个数不确定，名字也不确定。

  > **数组写法**适用于:要绑定多个样式，个数确定，名字也确定，但不确定用不用。

2. style样式

  > : style="{fontSize: xxx}"其中xxx是动态值。

  > : style="[a,b]"其中a、b是**样式对象**。



**注意！什么叫样式对象？**

**key不能瞎写，得是存在的这么一个css属性**

![1665578781664](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665578781664.png)





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





# 11.条件渲染

## 条件渲染:

1.**v-if**
写法:

> (1).v-if="表达式"

> (2).v-else-if="表达式"

> (3).v-else="表达式"适用于:切换**频率较低**的场景。

特点:**不展示的DOM元素直接被移除**。

注意: v-if可以和:v-else-if、v-else一起使用，但要求**结构不能被"打断”**。



2.**v-show**

写法: v-show="表达式"

适用于:切换**频率较高**的场景。

特点:不展示的DOM元素未被移除,仅仅是使用**样式隐藏掉**

3.备注**:使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到**。







##面试题.v-show和v-if的区别







v-show改变的是display

![1665579520691](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665579520691.png)



v-if 直接把<h2>搞没了

```html
 <h2 v-if="false">欢迎来到{{name}}</h2>
```

![1665579613374](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665579613374.png)



# 10/13/22 12.列表渲染

## 10.总结Vue数据监测

Vue监视数据的原理:
1. vue会监视**data**中**所有层次**的数据。

2. 如何监测对象中的数据?
  通过**setter实现监视**,且要在new Vue时就传入要监测的数据。

  > (1).对象中**后追加**的属性，Vue**默认不做响应式处理**

  > (2).如需**给后添加的属性做响应式**，请使用如下API:
  > **Vue.set(target.propertyName/index.value）**或**vm.$set(target.propertyName/index，value)**

3. 如何监测数组中的数据?
  通过**包裹数组**更新元素的方法实现,本质就是做了两件事:

  > (1).**调用原生**对应的方法对数组进行更新。

  > (2).**重新解析模板**，进而更新页面。

4. 在Vue修改数组中的某个元素一定要用如下方法:

  > 1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse();

  > 2.Vue.set()或vm.$set()

  特别注意:==Vue.set()和vm.$set()不能给vm或 vm的根数据(vm._data)对象添加属性!!!==





![1665801314866](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665801314866.png)

![1665801616884](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665801616884.png)

![1665801604126](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665801604126.png)









## 1.基本列表

v-for指令:

1.用于展示列表数据

2.语法: v-for="(item，index) in xxx" : key="yyy"

3.可遍历:数组、对象、字符串（用的很少)、指定次数（用的很少)

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
        <h2>人员列表</h2>
            <li v-for="p in persons" :key="p.id">
                {{p.name}}-{{p.age}}
            </li>
    
            <li v-for="(p,index) in persons" :key="p.id">
                {{p}}--{{index}}
            </li>

            <li v-for="(p,index) in persons" :key="index">
                {{p}}--{{index}}
            </li>
            
        </ul>

        <!--遍历对想-->>
        <h2>汽车信息</h2>
        <ul>
            <li v-for="(value,k) of car" key="k">
                {{k}}--{{value}}
            </li>
        </ul>

        <!--遍历字符串-->
        <ul>
            <li v-for="(char,index) of str" :key ="index">
                {{index}}--{{char}}
            </li>
        </ul>


        <!--遍历指定次数-->
        <ul>
            <li v-for="(number,index) of 5" :key="index">
                {{index}}--{{number}}
            </li>
        </ul>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            persons:[
                {id:'001',name:'张三',age:18},
                {id:'002',name:'李四',age:19},
                {id:'003',name:'王五',age:20},
            ],
            car:{
                name:"奥迪A8",
                price:'70万',
                color:'蓝色',
            },
            str:'hello'
        },
        
        methods:{

        }
    })
</script>
</html>

```



## 2.	key的原理

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
        <h2>人员列表</h2>
        <button @click.once="add">添加一个老刘</button>
            <li v-for="(p,index) in persons" :key="     ">
                {{p.name}}-{{p.age}}
                <input type="text">
            </li>
    
            <!-- <li v-for="(p,index) in persons" :key="p.id">
                {{p}}--{{index}}
            </li>

            <li v-for="(p,index) in persons" :key="index">
                {{p}}--{{index}}
            </li> -->
            
        </ul>

    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            persons:[
                {id:'001',name:'张三',age:18},
                {id:'002',name:'李四',age:19},
                {id:'003',name:'王五',age:20},
            ],
            car:{
                name:"奥迪A8",
                price:'70万',
                color:'蓝色',
            },
            str:'hello'
        },
        
        methods:{
            add(){
                const p={id:'004',name:'老刘',age:40}
                this.persons.unshift(p)
            }
        }
    })
</script>
</html>

```





：key 如果用index 会出现错位

unshift添加的老刘

![1665658027378](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665658027378.png)







（补充：用户输入的操作的是真实dom）

### I.（index作为key）遍历列表是key的作用

![1665659002573](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665659002573.png)





###II.（id为key）遍历列表时key的作用

![1665659308101](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665659308101.png)





## 面试题.:react、 vue中的key有什么作用? （key的内部原理)
**1.虚拟DOM中key的作用:**

>​	key是虚拟DON对象的标识，当状态中的数据发生变化时，Vue会根据【新数据】生成【新的	虚拟DON】,随后Vue进行**【新虚拟DOM】与【旧虚拟DOM】的差异比较**，比较规则如下:

**2.对比规则:**

>(1).旧虚拟DOM中找到了与新虚拟DOM相同的key:
>
>​	1.若虚拟DOM中内容没变，直接使用之前的真实DOM !
>​	2.若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

> (2).旧虚拟DOM中未找到与新虚拟DOM相同的key:
>
> ​	创建新的真实DOM,随后渲染到到页面。

**3．用index作为key可能会引发的问题:**

> ​	1.若对数据进行:==逆序添加==、==逆序删除==等破坏顺序操作:
> ​		会产生没有必要的真实DOM更新-->界面效果没问题，但效率低

> ​	2.如果结构中还包含输入类的DOM:
> ​		会产生错误DOM更新-->界面有问题。

**4、开发中如何选择key? :**

> ​	1.最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。

> ​	2.如果不存在对数据的==逆序添加==、==逆序删除==等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。



## 3.列表过滤

![1665662889310](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665662889310.png)





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
        <!-- <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <ul>
            <li v-for="(p,index) in persons" :key="index">
                {{p.name}}--{{p.age}}--{{p.sex}}
            </li>
        </ul> -->

        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <ul>
            <li v-for="(p,index) in filPersons" :key="index">
                {{p.name}}--{{p.age}}--{{p.sex}}
            </li>
        </ul>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    // 用watch实现
    //#region
    // const vm = new Vue({
    //     el:"#root",
    //     data:{
    //         keyWord:'',
    //         persons:[
    //             {id:'001',name:'马冬梅',age:18,sex:'女'},
    //             {id:'002',name:'周冬雨',age:19,sex:'女'},
    //             {id:'003',name:'周杰伦',age:21,sex:'男'},
    //             {id:'004',name:'温兆伦',age:22,sex:'男'},
    //         ],
    //         filPersons:[],
    //     },
    //     methods:{

    //     },
    //     watch:{


    //         // keyWord(val){
    //         //     console.log("改了",val)
    //         //     // 下面这越搜索越少！！ 所以不要对原数组进行操作
    //         //     this.filPersons=this.persons.filter((p)=>{
    //         //         // name 包含val
    //         //         // indexof 包含return index位置，不包含return  -1
    //         //         return p.name.indexOf(val)!==-1
    //         //     })

    //             keyWord:{
    //                //没输入是空串，filPersons包含空字串（index是0），所以应该iji执行监视，这样就可以刷新出来
    //                 immediate:true,
    //                 handler(val){
    //                     this.filPersons=this.persons.filter((p)=>{
    //                 // name 包含val
    //                 // indexof 包含return index位置，不包含return  -1
    //                     return p.name.indexOf(val)!==-1
    //                 })
    //             }
    //         }
    //     }
    // })
    //#endregion



// 用computed实现
    const vm = new Vue({
        el:"#root",
        data:{
            keyWord:'',
            persons:[
                {id:'001',name:'马冬梅',age:18,sex:'女'},
                {id:'002',name:'周冬雨',age:19,sex:'女'},
                {id:'003',name:'周杰伦',age:21,sex:'男'},
                {id:'004',name:'温兆伦',age:22,sex:'男'},
            ],
           
        },
        computed:{
            filPersons(){
                return this.filPersons=this.persons.filter((p)=>{
                    return p.name.indexOf(this.keyWord)!==-1
                })
            }
        },
    })
</script>
</html>

```





## 4.列表排序

![1665669057928](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665669057928.png)





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
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <button @click="sortType=2">年龄升序</button>
        <button @click="sortType=1">年龄降序</button>
        <button @click="sortType=0">原序</button>
        <ul>
            <li v-for="(p,index) of filPersons" :key="index">
                {{p.name}}--{{p.age}}--{{p.sex}}
            </li>
        </ul>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。
// 用computed实现
    const vm = new Vue({
        el:"#root",
        data:{
            keyWord:'',
            sortType:0,//0原序，1降序，2升序
            persons:[
                {id:'001',name:'马冬梅',age:24,sex:'女'},
                {id:'002',name:'周冬雨',age:62,sex:'女'},
                {id:'003',name:'周杰伦',age:18,sex:'男'},
                {id:'004',name:'温兆伦',age:19,sex:'男'},
            ],
           
        },
        computed:{
            
            filPersons(){
                //计算属性必须有返回值

                const arr= this.persons.filter((p)=>{
                    return p.name.indexOf(this.keyWord)!==-1
                })
                //判断一下是否需要排序
                // if(this.sortType!==0)
                if(this.sortType){
                    // 拿到过滤完的数组 arr，再排序
                    arr.sort((p1,p2)=>{
                        return this.sortType===1?p2.age-p1.age:p1.age-p2.age
                    })
                }
                return arr
            }
        },
    })
</script>
</html>

```



## 5.更新的



## 6.监测数据改变的原理_对象 7.模拟一个数据监测



![1665795109871](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795109871.png)





![1665795112381](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795112381.png)





vue是怎么检测你改变data中的数据呢？

![1665793766737](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665793766737.png)







这种写法

![1665795214769](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795214769.png)



读也不行，改也不行

![1665795210236](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795210236.png)



原因：递归死循环了

![1665795626766](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795626766.png)





### 下面用观察者模式去写：Observer



![1665795685481](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795685481.png)







![1665795629308](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795629308.png)



![1665795632285](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795632285.png)



![1665795664362](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795664362.png)









### vue比我们多做了数据代理

![1665795750697](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795750697.png)





### vue比我们考虑到了递归监听

a里面的对象b



![1665795790761](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795790761.png)





![1665795868146](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795868146.png)

![1665795937013](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795937013.png)





### 即使放在了数组里面 也能找到

![1665795979347](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665795979347.png)



![1665796010116](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665796010116.png)







### 用setter监测

![1665796039949](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665796039949.png)





## 8. Vue.set的使用







![1665796874294](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665796874294.png)



### 后添加的sex没有set

![1665796768686](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665796768686.png)







### 为了使后添加的数据也能实现响应式！ 用set

#### 对Vue 用set

![1665796938923](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665796938923.png)



![1665797003049](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797003049.png)



#### 注意 _data做了数据代理 可以直接取到student

![1665797114499](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797114499.png)



![1665797136756](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797136756.png)



#### vm用$set



![1665797055967](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797055967.png)



![1665797181852](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797181852.png)





#### set（）第一个参数target不可以是vm或者vm._data

![1665797637565](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797637565.png)



![1665797651236](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665797651236.png)





## 9.监测数据改变的原理_数组

![1665798534694](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665798534694.png)







### 包装技术

![1665798967528](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665798967528.png)







![1665798745679](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665798745679.png)





####hobby数组是被vue管理的，你所调用的push就不是正常原型对象的push了

![1665798783415](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665798783415.png)





包装

![1665798925456](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665798925456.png)







不常用的

![1665799031398](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665799031398.png)



# 10/15/22 13.收集表单数据



收集表单数据:

> 1. 若:<input type="text"/>，则v-model收集的是value值，**用户输入的就是value值**。

> 2. 若: "<input type="radio"/>，则v-model收集的是value值，且**要给标签配置value**值。

> 3. 若: <input type="checkbox" / >

>>1.**没有配置**input的**value属性**，那么收集的就是**checked**（勾选or未勾选，是布尔值)
>>2.配置input的value属性;
>>
>>>(1)v-model的初始值是**非数组**，那么收集的就是**checked（勾选or未勾选，是布尔值)**
>>>(2)v-model的初始值是**数组**，那么收集的的就是**value组成的数组**

备注: v-model的三个修饰符:

> lazy:**失去焦点**再收集数据
> number:输入字符串转为有效的数字
> trim:输入**首尾空格过滤**





![1665801717899](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665801717899.png)





```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>

    <!--
        收集表单数据:
若:<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。若: "<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。若: <input type="checkbox" / >
1.没有配置input的value属性，那么收集的就是checked（勾选or未勾选，是布尔值)2.配置input的value属性;
(1)v-model的初始值是非数组，那么收集的就是checked（勾选or未勾选，是布尔值)(2)v-model的初始值是数组，那么收集的的就是value组成的数组
备注: v-model的三个修饰符:
lazy:失去焦点再收集数据
number:输入字符串转为有效的数字trim:输入首尾空格过滤

    -->
    <!--准备一个容器-->
    <div id ="root">
        <form @submit.prevent="demo">
            <!-- <label for="demo">账号:</label>
            <input type="text" id="demo"> -->

            <!-- .trim 去掉前后的空格-->
            账号：<input type="text" v-model.trim="userInfo.account"><br/>
            密码：<input type="password" v-model="userInfo.password"><br/>
            <!-- .number-->
            年龄：<input type="number" v-model.number="userInfo.age"><br/>
            性别：
            男<input type="radio"name="sex" v-model="userInfo.sex" value="male">
            女<input type="radio"name="sex" v-model="userInfo.sex" value="female"><br/><br/>
            爱好：
            学习<input type="checkbox" v-model="userInfo.hobby" value="study">
            打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
            吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
            <br/><br/>
            所属校区
            <select v-model="userInfo.city">
                <option value="">请选择校区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
                <option value="wuhan">武汉</option>
            </select>
        </br></br>
            其他信息:
            <!--
                .lazy 失去焦点的时候才刷新数据
            -->
            <textarea v-model.lazy="userInfo.other"></textarea></br></br>
            <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http:www.atguigu.com">《用户协议》</a>
            <button>提交</button>
        </form>
    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。


    const vm = new Vue({
        el:"#root",
        data:{
            userInfo:{
                account:'',
                password:'',
                age:'',
                sex:'female',
                hobby:[],//不能写成字符串，不然就是绑定的勾不勾选(要么全勾要么全不勾)
                city:'beijing',
                other:'',
                agree:'', //只要勾or不勾 所以用checkbox也没问题
            }
           
        },
        methods:{
            demo(){
                // alert(1)
                // console.log(Vue.data)
                // console.log(this._data)
                // console.log(JSON.stringify(this._data))
                console.log(JSON.stringify(this.userInfo))

            }
        }
    })
</script>
</html>

```



# 14.过滤器

过滤器:

定义:对要显示的数据进行**特定格式化**后再显示（适用于一些**简单逻辑**的处理)。语法:

1.注册过滤器: **Vue.filter(name,callback)**或**new Vue{filters:{}}**

2.使用过滤器**:{{ xxx|过滤器名}}**或**v-bind:属性=“xxx│过滤器名"**

备注:

1.过滤器也**可以接收额外参数**、多个过滤器也可以**串联**

2.并**没有改变原本的数据**，是**产生新的**对应的**数据**





![1665840879789](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665840879789.png)



![1665843649449](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665843649449.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="../js/vue.js"></script>
    <script src="../js/dayjs.min.js"></script>
</head>
<body>
    <!--准备一个容器-->
    <div id ="root">
        <h2>显示格式化后的时间</h2>
        <!--计算属性实现-->
        <h3>现在是：{{fmtTime}}</h3>
        
        <!--methods实现-->
        <h3>现在是：{{getFmtTime()}}</h3>

        <!-- 过滤器实现  | timeFormater 不写（）也会自动传入time-->
        <h3>现在是：{{time | timeFormater }}</h3>
        <!--过滤器(传参)-->
        <h3>现在是：{{time | timeFormater('YYYY_MM_DD')| mySlice }}</h3>

        <h3 :x="msg|mySlice">你好你好,后面的字不要了啊</h3>

    </div>
</body>

<script>
    Vue.config.productionTip = false;//阻止vue在启动生成生产提示。

    // 全局过滤器 写在new Vue 之前
    Vue.filter('mySlice',function(value){
        return value.slice(0,4)
    })

    const vm = new Vue({
        el:"#root",
        data:{
            time:1621561377603,//时间戳
            msg:'你好你好,后面的字不要了啊',
        },
        computed:{
            fmtTime(){
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        methods:{
            getFmtTime(){
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        // 这里写的是局部过滤器
        filters:{
            timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
                return dayjs(value).format(str)
            },
            mySlice(value){
                return value.slice(0,4)
            }
        }
    })
</script>
</html>

```





# 15.内置指令







## v-text





## v-html

v-html指令:

1. 作用:向指定节点中渲染**包含html结构**的内容。

2. 与插值语法的区别:
   (1).v-html会**替换**掉**节点**中**所有的内容**，{{xx}}则不会。

   (2).v-html可以识别html结构。

3. 严重注意:v-html有**安全性问题**!!!!

   (1).在网站上动态渲染任意HTML是非常危险的，容易导致**XSS攻击**。

   (2).**一定要在可信的内容上使用v-htm**l，永不要用在用户提交的内容上!




## cookie

![1665878594285](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665878594285.png)



![1665878703491](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665878703491.png)









### 窃取cookie

document.cookie

![1665879474714](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665879474714.png)



![1665879315641](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665879315641.png)



![1665879342703](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665879342703.png)







### 安全性问题(xxs攻击)

Http-Only

![1665879403492](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665879403492.png)





## v-cloak

v-cloak指令（==没有值==）:

1.本质是一个特殊属性，**Vue实例创建完毕并接管容器后**，==会删掉v-cloak属性==。

2.使用**css配合v-cloak**可以解决**网速慢时页**面展示出{{xxx}}的问题。

![1665880345593](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665880345593.png)



![1665880533297](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665880533297.png)





使用**css配合v-cloak**可以解决**网速慢时页**面展示出{{xxx}}的问题。

display:none

![1665880682679](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665880682679.png)



## v-once

v-once指令:
1.v-once所在节点在**初次动态**渲染后，就**视为静态**内容了。
2.**以后数据的改变不会引起v-once所在结构的更新**，可以用于==优化性能==。



![1665880923557](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665880923557.png)



![1665880980163](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665880980163.png)



## v-pre

v-pre指令:

1.跳过其所在节点的**编译过程**。

2.可**利用它跳过**:**没有使用指令语法**、**没有使用插值语法的节点**，会==加快编译==。



![1665881289673](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665881289673.png)





# 16.自定义指令 directives

==总结如下==

. ....
需求1:定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
需求2:定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。自定义指令总结:

一、定义语法:

(1).局部指令:

```html
new Vue({
	directives:{指令名,配置对象}
})
```

![1665916816583](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665916816583.png)

```html
new Vue({
	directives:{指令名,回调函数}
})
```

![1665916791225](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665916791225.png)



![1665916924086](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665916924086.png)



(2).全局指令:

```html
Vue.directive(指令名,配置对象)
```

![1665916662857](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665916662857.png)


```html
Vue.directive(指令名,回调函数)
```

![1665916692179](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665916692179.png)

二、配置对象中常用的3个回调:

(1).bind:指令与元素**成功绑定**时调用。

(2).inserted:指令所在**元素被插入页面**时调用。

(3).update:指令所在模板结构被**重新解析**时调用。

三、备注:

1.指令**定义时不加v-**，但**使用时要加v-**;

2.指令名如果是**多个单词**，要使用**kebab-case命名**方式，不要用camelCase命名。





==上面是总结==







directives**不靠返回值**

**big函数何时会被调用?**

1.指令与元素成功绑定时(一上来)。

2.指令所在的模板被重新解析时。

![1665882795488](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665882795488.png)



![1665882316588](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665882316588.png)







## bind inserted update
![1665915233358](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665915233358.png)



这样写不行，获取焦点失败，因为模板还没创建好就执行了focus()
![1665912009215](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665912009215.png)











### 设置全局指令



![1665915997972](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665915997972.png)





# 17.生命周期 比如：mouted()  beforeDestroy()



生命周期:
1.又名:生命周期回调函数、生命周期函数、**生命周期钩子**。

2.是什么:Vue**在关健时刻**帮我们**调用**的一些特殊名称的函数。

3.生命周期函数的**名字不可更改**，但函数的**具体内容**是程序员根据**需求编写**的。

4.生命周期函数中的**this指向是vm** 或**组件实例对象**。







常用的生命周期钩子:

1.mounted:**发送ajax请求、启动定时器、绑定自定义事件、订阅消息**等【初始化操作】

2.beforeDestroy:清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例

1**.销毁后**借助**Vue开发者工具看不到任何信息**。

2.销毁后**自定义事件**会**失效**,但**原生DOM事件依然有效**。

3.一般不会再beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。



## 1.引出生命周期





![1665997507931](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665997507931.png)







**错误写法**

vue解析模板 调用change（）开启定时器，但是定时器里面修改了data中的opacity，此时vue会重新解析模板，有重新调用change（），然后右开始了一个定时器

![1665998757746](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665998757746.png)



![1665998870056](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665998870056.png)







![1665999632023](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665999632023.png)









## 2.分析生命周期





![1665999876990](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1665999876990.png)



![1666001278747](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666001278747.png)



![1666010721979](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666010721979.png)



![1666010983826](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666010983826.png)

## 3.总结生命周期

8个 4对



![1666016103143](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666016103143.png)





# 对组件的理解

模块化

组件化



**传统**

![1666094185637](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666094185637.png)



![1666094221121](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666094221121.png)



**组件编程**

![1666094259042](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666094259042.png)





![1666094387132](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666094387132.png)



![1666094425570](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666094425570.png)



# 18.非单文件组件

Vue中使用组件的三大步骤;

​	一、定义组件(**创建组件**)

​	二、**注册**组件

​	三、使用组件(**写组件标签**)

一、如何定义一个组件?

使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别;

区别如下:

> 1.el不要写，为什么?—最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。

> 2.data必须写成函数，为什么?——**避免组件被复用时**，**数据存在引用关系**。

==(用函数每次都是return 1个新的)==

备注:**使用template**可以**配置组件结构**。

二、如何注册组件?

> 1.局部注册:靠new Vue的时候传入**components**选项

> 2.全局注册:**靠Vue.component('组件名’,组件)**

三、编写组件标签:

<school></school>









组件不写el

**组件就是一块砖，哪里需要哪里搬**



## 注意点



### 命名



1.关于组件名:

一个单词组成:

> 第一种写法(首字母小写):school

> 第二种写法(首字母大写):School



多个单词组成:

> 第一种写法(kebab-case命名):my-school

> 第二种写法(CamelCase命名):MySchool(需要Vue脚手架支持)

备注:

(1).组件名尽可能**回避HTML中已有的元素名称**，例如:h2、H2都不行。

(2).可以使用**name配置项**指定组件**在开发者工具中呈现的名字**。

2.关于组件标签:

第一种写法（双标签）: <school>< / school>

第二种写法（单标签自闭和）:<school/>

备注:不用使用脚手架时，<school/>会导致后续组件不能渲染。

3.一个简写方式:

const school = Vue.extend(options）可**简写**为: **const school = options**







![1666099261651](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666099261651.png)





多个单词  第一种写法

![1666099356754](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666099356754.png)

![1666099371074](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666099371074.png)





## 组件嵌套





![1666101018722](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666101018722.png)



![1666101114409](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666101114409.png)









![1666101467737](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666101467737.png)

![1666101485577](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666101485577.png)

Vue里面也可写成

![1666101511782](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666101511782.png)





## VueComponent(构造函数)

关于VueComponent:

1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

2.我们只需要写<school/>或<school></school>，**Vue解析时**会帮我们**创建school组件的实例对象**,即Vue帮我们执行的:new VueComponent(options)。

3==.特别注意==:每次调用Vue.extend，**返回的都是一个全新的**VueComponent! !!!

4.关于this指向:

(1).**组件配置**中:

> data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【**VueComponent实例对象**】

(2).**new Vue()配置**中:

> data函数、methods中的函数、watch中的函数、computed中的函数它们的**this**均是【**Vue实例对象**】。

5.VueComponent的实例对象，以后简称**vc**（也可称之为:组**件实例对象**）。

**Vue的实例对象**,以后简称**vm**。



![1666226724695](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666226724695.png)



## 重要！！一个重要的内置关系 VueComponent.prototype._proto_ === Vue.prototype

1.一个重要的内置关系:VueComponent.prototype._proto_ === Vue.prototype

2.为什么要有这个关系:让组件实例对象（vc）可以访问到 Vue原型上的属性、方法,



![1666236697629](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666236697629.png)











prototype显示原型属性

__proto__隐式原型属性

![1666227376006](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666227376006.png)



![1666227805929](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666227805929.png)



![1666227840149](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666227840149.png)





 	![1666234307535](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666234307535.png)

显示只有函数才拥有

隐示只有实例才拥有





# 19.单文件组件



## 命名规范

![1666237426277](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1666237426277.png)