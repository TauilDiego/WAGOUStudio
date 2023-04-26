import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {
    const lightTheme: ThemeDefinition = {
        dark: false,
        colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#041122',
            secondary: '#29DB86',
            error: '#FF4041',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
        }
    }

    const darkTheme: ThemeDefinition = {
        dark: true,
        colors: {
            background: '#041122',
            surface: '#041122',
            primary: '#FFFFFF',
            secondary: '#29DB86',
            error: '#FF4041',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
        }
    }

    const vuetify = createVuetify({
        components,
        directives,
        ssr: true,
        theme: {
            defaultTheme: 'darkTheme',
            themes: {
                lightTheme,
                darkTheme
            }
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
