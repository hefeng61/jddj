import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView'
import IndexView from '@/views/IndexView'
import Mine from '@/views/Mine'
import RegisterView from '@/views/login/RegisterView'
import ShopDetail from '@/views/ShopDetail'
import ConfirmOrder from '@/views/ConfirmOrder'

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
  },
  {
    path: '/detail/:id',
    name: 'ShopDetail',
    component: ShopDetail
  },
  {
    path: '/confirmOrder',
    name: 'confirm',
    component: ConfirmOrder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  if (isLogin || to.name === 'login' || to.name === 'register') {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
