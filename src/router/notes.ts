import { Route } from '@/router/index'

export const notesRoutes: Route[] = [
  {
    path: '/share/WinSoftware',
    component: () => import('@/notes/WinSoftware/WinSoftware.vue')
  },
  {
    path: '/share/usefulWeb',
    component: () => import('@/notes/usefulWeb/usefulWeb.vue')
  }
]
