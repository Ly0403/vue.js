import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: () => import('../views/AddPost.vue')
  },
  {
    path: '/posts/:title',
    name: 'EditPost',
    component: () => import('../views/EditPost.vue'),
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
