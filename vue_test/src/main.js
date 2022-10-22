import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// console.log("666")


// new Vue({
//   el:'#app',
//   render(createElement){
//     return createElement('h1','你好啊')
//   },

//   // 只写下面的渲染不了，因为引用的vue是残缺版本的，可能不能解析template
//   // template:`<h1>你好啊</h1>`,
//   // components:{App}
// })
