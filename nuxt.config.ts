// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-28',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  resolve: {
    alias: {
      'three': 'node_modules/three/build/three.module.js'
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Porsche+Next&family=Arial+Narrow&family=Arial&family=Heiti+SC&family=SimHei&display=swap'
      }
    ]
  },
})