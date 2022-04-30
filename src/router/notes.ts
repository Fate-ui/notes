import { Route } from '@/router/index'

export const notesRoutes: Route[] = [
  {
    path: '/share/WinSoftware',
    component: () => import('@/notes/WinSoftware/WinSoftware.vue')
  }
]
