import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { createPinia } from 'pinia'
import '@/style/index.scss'
//注册svg-icon
import 'virtual:svg-icons-register'
import SvgIcon from '@/baseComponents/svgIcon/SvgIcon.vue'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(router)
app.use(createPinia())
app.mount('#app')
