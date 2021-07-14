import { createRouter, createWebHashHistory } from 'vue-router'
import Overview from '../views/Overview.vue'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Users.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
