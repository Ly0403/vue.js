import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name:'newpage',
    component: () => import('../views/NewPage.vue')
  },
  {
    path: '/students',
    name:'students',
    component: () => import('../views/Students.vue')
  },
  {
    path: '/students/:id',
    name:'studentinfo',
    component: () => import('../views/StudentInfo.vue'),
    props:true
  },
  {
    path: '/student',
    redirect:'/students'
  },
  {
    path: '/:catchAll(.*)',
    name:'notfound',
    component: () => import('../views/404.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
