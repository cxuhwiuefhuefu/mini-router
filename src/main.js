/*
 * @Author: Sunny
 * @Date: 2022-12-01 17:32:28
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-16 15:16:04
 * @Description: 
 * @FilePath: /mini-router/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'

// 引入路由模块
import router from '@/router/index.js'
// import router from '@/router/index.js'

console.log("router", router);


Vue.config.productionTip = false

new Vue({
  name: "root",
  el: "#app", 
  router, // 问题：为什么把构造函数暴露到这里来 vuex 注册也放在这里来 为什么全局注册的一些函数也放在这里来？
  render: h => h(App),
}).$mount('#app')
