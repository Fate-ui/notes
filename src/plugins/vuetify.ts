import 'vuetify/styles'
import { zhHans } from 'vuetify/locale'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

export const vuetify = createVuetify({
  locale: {
    defaultLocale: 'zhHans',
    messages: { zhHans }
  },
  theme: {
    defaultTheme: 'light'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
