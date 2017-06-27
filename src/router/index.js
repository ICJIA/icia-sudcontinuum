import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
  },
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
