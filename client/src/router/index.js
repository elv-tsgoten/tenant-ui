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
  },
  {
    path: '/objects',
    name: 'Objects',
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Objects.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Transactions.vue')
  },
  {
    path: '/usage',
    name: 'Usage',
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Usage.vue')
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Marketplace.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
