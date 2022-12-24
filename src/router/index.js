/*
 * @Author: Sunny
 * @Date: 2022-12-01 18:22:00
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-24 18:08:36
 * @Description: 
 * @FilePath: /mini-router/src/router/index.js
 */




import Vue from 'vue'
// import Router from 'vue-router'
import Router from '../myRouter/index.js'

import About from '@/views/About.vue'
import Home from '@/views/Home.vue'


Vue.use(Router) // 作用是 注册插件
// Vue.use 原理 
// 1. 执行里面的方法
// 2. 如果你这个方法有一个属性   install 并且这个属性是一个方法
// 3. 就是 install 这个方法 第一个参数 vue
// function say() {
//     console.log(100)
// }
// say.install = function(_vue) {
//     console.log('install', _vue)
// }
// Vue.use(say)


//添加以下代码
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'About', component: About }
  ]
})