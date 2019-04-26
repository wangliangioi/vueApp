import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/page/HomePage'
import TodoList from '@/page/TodoList'
import TodoItem from '@/components/TodoItem'
import chanpin from '@/components/chanpin'
import anli from '@/components/anli'
import dongtai from '@/components/dongtai'
import guanyu from '@/components/guanyu'
// const HomePage = r => require.ensure([], () => r(require('@/page/HomePage')), 'Homepage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/vueApp',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/chanpin',
      name: 'chanpin',
      component: chanpin
    },
    {
      path: '/anli',
      name: 'anli',
      component: anli
    },
    {
      path: '/dongtai',
      name: 'dongtai',
      component: dongtai
    },
    {
      path: '/guanyu',
      name: 'guanyu',
      component: guanyu
    },
  ]
})
