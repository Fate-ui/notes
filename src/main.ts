import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { createPinia } from 'pinia'
import '@/style/index.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { zhHans } from 'vuetify/locale'
//注册svg-icon
import 'virtual:svg-icons-register'
import SvgIcon from '@/baseComponents/svgIcon/SvgIcon.vue'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(router)
app.use(createPinia())
//vuetify UI框架
app.use(
  createVuetify({
    locale: {
      defaultLocale: 'zhHans',
      messages: { zhHans }
    },
    theme: {
      defaultTheme: 'dark'
    }
  })
)
app.mount('#app')
