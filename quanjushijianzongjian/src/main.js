import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// const Demo = Vue.extend({})
// const d = new Demo()

// Vue.prototype.x=d

//创建vm
new Vue({
  render: h => h(App),
  beforeCreate(){
    // 在这个时候 this 指向的还是vm
    Vue.prototype.$bus=this//安装全局事件总线
  }
}).$mount('#app')
