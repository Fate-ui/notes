import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import '@/style/index.scss'
//注册svg-icon
import 'virtual:svg-icons-register'
import SvgIcon from '@/baseComponents/svgIcon/SvgIcon.vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(router)
app.use(createPinia())
app.use(vuetify)
app.mount('#app')
