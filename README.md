<!--
 * @Author: Sunny
 * @Date: 2022-12-01 17:32:35
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-01 21:16:08
 * @Description: 
 * @FilePath: /mini-router/README.md
-->


后端路由：输入 url -> 请求发送到服务器 -> 服务器解析请求的路径 -> 返回回去

前端路由：输入 url -> js 解析地址 -> 找到对应的地址页面 -> 执行页面生产的js -> 看到页面 



vue 工作原理示意图
- url 改变
- 触发监听事件
- 改变 vue-router 里面的 current 变量
- vue 监听 current 的监视者
- 获取到新的组件
- Render 新组件 
 

**hash 与 history 的使用**
hash
- #号后面的就是 hash 的内容
- 可以通过 location.hash 拿到
- 可以通过 onhashchange 监听 hash 的改变

history
- hostory 即正常路径
- 可以通过 location.pathname 拿到
- 可以用 onpopstate 监听 history 的变化