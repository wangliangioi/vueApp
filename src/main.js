// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
import store from './store'
import VueResource from 'vue-resource'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.component('cart-item',{
    props:['data','index'],
    template:'<li>\
    <span>index = {{index}}</span>\
    <span>商品名{{data.productName}}</span>\
    <span>价格{{data.productPrice}}</span>\
    <span>数量{{data.productQuentity}}</span>\
    <button @click="deleteItem">删除</button>\
    </li>',
    methods:{
      deleteItem:function (){
        console.log('deleteItem');
        this.$emit('delete',this.index)
      }
    }
  }
)

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/Base',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\w+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
      // Remove the "./_" from the beginning
        .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.use(ElementUI);
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
    return {
      foo: 1
    }
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
