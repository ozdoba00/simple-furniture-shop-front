import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/admin/AdminDashboard.vue'

const routes = [

  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard
  },

  {
    path: '/admin/users',
    name: 'users',
    component: AdminDashboard
  },

  {
    path: '/admin/categories',
    name: 'categories',
    component: AdminDashboard
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
