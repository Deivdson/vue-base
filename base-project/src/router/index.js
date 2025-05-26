import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import About from '../views/About.vue'
import Reports from '@/views/Reports.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { hideNavbar: true } },
  { path: '/about', name: 'About', component: About },
  { path: '/reports', name: 'Reports', component: Reports },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
