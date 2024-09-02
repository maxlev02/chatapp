import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isAuthenticated = false
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/Chat.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/ChatLogin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/ChatRegister.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (!isAuthenticated && to.name !== 'login' && to.name !== 'register') {
    return { name: 'login' }
  }
})

export default router
