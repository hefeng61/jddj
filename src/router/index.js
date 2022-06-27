import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView'
import Index from '@/views/Index'
import IndexView from '@/views/IndexView'

const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: Index
  // },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: IndexView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.name === 'login') {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
