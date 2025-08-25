import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "../stores/auth"

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/Home.vue'),
    redirect: { name: 'UserPage' }
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: () => import('../pages/auth/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: () => import('../pages/auth/pages/Login.vue'),
        meta: {
          auth: false,
          layout: 'blank'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'UserPage',
    component: () => import('../pages/user/User.vue'),
    meta: {
      auth: true,
      layout: 'default'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const currentDate = Math.ceil(Date.now() / 1000)
  if (to.meta?.auth) {
    if (authStore.userAccessToken && currentDate < authStore.userAuth.expiresIn) {
      return next()
    }
    return next({ name: 'LoginPage' })
  }
  if (!to.meta.auth && authStore.userAccessToken) {
    return next({ name: 'UserPage' })
  }
  return next()
})

export default router
