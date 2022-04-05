import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/views/dashboard/Dashboard.vue'

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue'),
    meta: { title: '首页', icon: 'home' }
  },
  {
    path: '/share',
    component: () => import('@/views/share/Share.vue'),
    meta: { title: '分享', icon: 'share' }
  },
  {
    path: '/project',
    component: () => import('@/views/project/Project.vue'),
    meta: { title: '项目', icon: 'project' }
  },
  {
    path: '/interflow',
    component: () => import('@/views/interflow/Interflow.vue'),
    meta: { title: '技术交流', icon: 'interflow' }
  },
  {
    path: '/resource',
    component: () => import('@/views/resource/Resource.vue'),
    meta: { title: '资源下载', icon: 'resource' }
  },
  {
    path: '/about',
    component: () => import('@/views/about/About.vue'),
    meta: { title: '关于', icon: 'about' }
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})
