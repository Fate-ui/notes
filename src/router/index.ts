import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/view/dashboard/Dashboard.vue'),
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
