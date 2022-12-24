<!--
 * @Author: Sunny
 * @Date: 2022-12-01 17:32:28
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-24 18:15:56
 * @Description: 
 * @FilePath: /mini-router/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
    <!-- {{ current }} -->
    <br />
    <br />
    <br />
    <button @click="push">点击</button>
    <router-link to="/" >home</router-link>
    <br/>
    <router-link to="/about" >about</router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    push() {
      console.log(1, this.$router)
      this.$router.current = '/'
    }
  },
  created () {
    // console.log('app',  this.$router)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
