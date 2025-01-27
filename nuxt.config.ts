// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
    modules: [
    'nuxt-quasar-ui'
  ],
  devtools: { enabled: true },
  typescript : {
    shim: false,
    typeCheck: true,
  },  
  ssr: false
  // mode:'spa',
  // build: {
  //   ssr: false,
  // }
})
