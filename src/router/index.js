import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView'
import IndexView from '@/views/IndexView'
import Mine from '@/views/Mine'
import RegisterView from '@/views/login/RegisterView'
import Cart from '@/components/shop/Cart'

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
    component: () => import('@/views/ShopDetail')
  },
  {
    path: '/confirmOrder/:id',
    name: 'confirm',
    component: () => import('@/views/ConfirmOrder')
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/pay',
    name: 'pay',
    component: () => import('@/components/pay/PayConfirm')
  }, {
    path: '/paySuccess',
    name: 'paySuccess',
    component: () => import('@/components/pay/PaySuccess')
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
