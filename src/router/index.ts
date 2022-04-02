import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/view/dashboard/Dashboard.vue'

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Dashboard,
    children: [
      {
        path: '/home',
        component: () => import('@/view/home/Home.vue'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  },
  {
    path: '/share',
    component: Dashboard,
    children: [
      {
        path: '/share',
        component: () => import('@/view/share/Share.vue'),
        meta: { title: '分享', icon: 'share' }
      }
    ]
  },
  {
    path: '/project',
    component: Dashboard,
    children: [
      {
        path: '/project',
        component: () => import('@/view/project/Project.vue'),
        meta: { title: '项目', icon: 'project' }
      }
    ]
  },
  {
    path: '/interflow',
    component: Dashboard,
    children: [
      {
        path: '/interflow',
        component: () => import('@/view/interflow/Interflow.vue'),
        meta: { title: '技术交流', icon: 'interflow' }
      }
    ]
  },
  {
    path: '/resource',
    component: Dashboard,
    children: [
      {
        path: '/resource',
        component: () => import('@/view/resource/Resource.vue'),
        meta: { title: '资源下载', icon: 'resource' }
      }
    ]
  },
  {
    path: '/about',
    component: Dashboard,
    children: [
      {
        path: '/about',
        component: () => import('@/view/about/About.vue'),
        meta: { title: '关于', icon: 'about' }
      }
    ]
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})
