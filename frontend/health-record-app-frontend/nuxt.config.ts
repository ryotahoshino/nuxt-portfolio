// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: [],
  },
  modules: [
    //...
    '@nuxt/ui',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls: true,
      },
    },
  },
})