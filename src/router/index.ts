import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/view/home/Home.vue')
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})
