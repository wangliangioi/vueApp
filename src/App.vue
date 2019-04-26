<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <router-link to="/">首页</router-link>
        <!-- <a href="/todolist">todolist</a> -->
        <router-link to="/todolist">TodoList</router-link>
        <router-link to="/chanpin">产品</router-link>
        <router-link to="/anli">案例</router-link>
        <router-link to="/dongtai">动态</router-link>
        <router-link to="/guanyu">关于</router-link>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  width: 100%;
  height: 60px;
}
nav>ul{
  padding: 0;
  display: flex;
  justify-content: space-around;
}
a{
  text-decoration: none;
  color: #000;
}
#nav > ul > a{
  display: block;
  flex: 1;
  height: 50px;
  line-height: 50px;
}
.router-link-exact-active{
  background: #67c23a;
}
.active{
  /* background: #67c23a; */
}
</style>
