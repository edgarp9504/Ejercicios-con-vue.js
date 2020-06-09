import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "New" */ '../views/New.vue')
  },
  {
    path: '/fotos/:id',
    name: 'Fotos',
    component: () => import(/* webpackChunkName: "New" */ '../views/Fotos.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "New" */ '../views/Grid.vue')
  }
  ,
  {
    path: '/card',
    name: 'card',
    component: () => import(/* webpackChunkName: "New" */ '../views/Card.vue')
  }  ,
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "New" */ '../views/Form.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
