// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    imports: {
        autoImport: true
    },
    typescript: {
        strict: true
    },
    css: [
        // vuetify sass
        'vuetify/lib/styles/main.sass',
        // mdi icons
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        build: {
            rollupOptions: {
                external: [
                    /^node:.*/,
                ]
            }
        }
    },
})
