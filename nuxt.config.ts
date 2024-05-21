// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/eslint'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-CA',
        name: 'English',
        file: 'en-ca.json',
      },
      {
        code: 'fr',
        iso: 'fr-CA',
        name: 'Français',
        file: 'fr-ca.json',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: './locales/',
  },
});
