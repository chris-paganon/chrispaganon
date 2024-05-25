export default defineNuxtPlugin(() => {
  const environment = useRuntimeConfig().public.environment;
  if (environment !== 'production') return;

  useHead({
    script: [
      {
        async: true,
        src: 'https://umami.vueai.tools/script.js',
        'data-website-id': '3e9c545c-5596-4859-a9f5-821b47c2e9cd',
      },
    ],
  });

  useSeoMeta({
    title: 'Chris Paganon',
    ogTitle: 'Chris Paganon',
    description: 'Full-stack web developper',
    ogDescription: 'Full-stack web developper',
    ogImage: '/images/me.jpg',
  });
});
