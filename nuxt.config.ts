// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/eslint'],
  app: {
    head: {
      title: 'Chris Paganon',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ubuntu',
        },
      ],
    },
  },
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
  runtimeConfig: {
    sendgridApiKey: 'SG.ab12',
  },
});
