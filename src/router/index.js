import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/picture',
    component:()=>import('../views/picture.vue')
  },
  {
    path:'/carlei',
    component:()=>import('../views/carlei.vue')
  },
  {
    path:"/toColor",
    component:()=>import('../views/toColor.vue')
  },
  {
    path:"/toKuan",
    component:()=>import('../views/toKuan.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/city',
    component:()=>import('../views/city.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
