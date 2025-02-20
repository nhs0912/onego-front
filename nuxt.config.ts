// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    'nuxt-quasar-ui', // needed
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n: {
    locales: ['en', 'ko'], // URL 경로 접두사에 사용됨
    defaultLocale: 'ko', // Nuxt 페이지 및 라우팅을 위한 프로젝트의 기본 로케일
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  ssr: true,
  imports: {
    // presets: [
    //   {
    //     from: 'vue-i18n',
    //     imports: ['useI18n'],
    //   },
    // ],
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  app: {
    head: {
      title: 'OneGo',
      meta: [{ name: 'description', content: 'Onego project입니다.' }],
    },
  },
});
