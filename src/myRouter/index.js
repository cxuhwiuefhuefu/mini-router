/*
 * @Author: Sunny
 * @Date: 2022-12-02 12:12:54
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-24 18:13:48
 * @Description: 
 * @FilePath: /mini-router/src/myRouter/index.js
 */

// import { h } from "vue";

// function h() {
    
// }


let Vue;
class VueRouter {
    constructor(options) {
        console.log("options", options)
        // this.current = '/'; // 当前路由  非响应式

        // 响应式
        let initPath = '/';
        Vue.util.defineReactive(this, 'current', initPath)
        
        this.routes = options.routes; // 用户路由规则
        this.mode = options.mode || 'hash'
        this.init(); // 监听路由改变
    }
    init() {
        
        if(this.mode === 'hash') {
            console.log("location.hash", this, location.hash)

            // 注意项目第一次加载
            window.addEventListener('load', () => {
                this.current = location.hash.slice(1)
            })
            // 监听路由改变
            window.addEventListener('hashchange', () => {
                this.current = location.hash.slice(1);
            })
        }
    }
}


VueRouter.install = function(_Vue) {
    Vue = _Vue;
    console.log('CC', Vue, )

    // 给调用组件添加一个属性 router
    Vue.mixin({ // 给全局添加数据和方法 vue3.1 composition api    有两个缺点：1.数据来源不清楚 2.命名命太多了
        beforeCreate() {
            console.log("this.$options.name", this.$options.name, this.$options.router)

            if(this.$options.router) { // 根实例
                Vue.prototype.$router = this.$options.router
            }
        }
    })

   
    
    // 全局组件
    // router-link
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                require: true
            }
        },
        render (h) { // h 函数就是用来创建 html 标签的
            // console.log("this.$slots.default", this.$slots)
            return h('a', {
                attrs: {
                    href: "#" + this.to
                }
            }, this.$slots.default); // html
        }
    })
    // router-view
    Vue.component('router-view', {
        render (h) { // curent 必须是响应式才能触发这个方法
            // 路由地址 + 
            // console.log("this.$router", this.current, this.$router, this.routes)
            let current = this.$router.current;  // 变成响应式 1. Object.definedProperty 2. props
            let routes= this.$router.routes

            let com = routes.find(item => {
                console.log("current === item.path", current, item.path)
                return current === item.path
            })
           
        
            return h(com.component); // html
            // return h('div', 'router-view')
        }
    })

}

export default VueRouter

