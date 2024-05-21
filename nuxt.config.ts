// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/eslint'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
});
