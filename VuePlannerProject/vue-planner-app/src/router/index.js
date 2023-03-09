import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import('../views/AddProject.vue')
  }
  ,
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
