import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/machine',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/',
    name: 'Start',
    component: () => import('@/views/Start.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
