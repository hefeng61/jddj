import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView'
import IndexView from '@/views/IndexView'
import Mine from '@/views/Mine'
import RegisterView from '@/views/login/RegisterView'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter (to, from, next) {
      const isLogin = localStorage.getItem('isLogin')
      if (isLogin) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  const isLogin = localStorage.getItem('isLogin')
  if (to.name === 'login' || isLogin) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
