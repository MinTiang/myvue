import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/',
    name: 'Demo',
    component: Demo
  }]
})
