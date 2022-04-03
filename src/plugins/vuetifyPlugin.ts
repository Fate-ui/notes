import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { zhHans } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

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
