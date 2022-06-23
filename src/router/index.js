import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/IndexView'

const routes = [
  {
    path: '/',
    name: 'index',
    component: indexView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
