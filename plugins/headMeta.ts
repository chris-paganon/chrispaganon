export default defineNuxtPlugin(() => {
  const environment = useRuntimeConfig().public.environment;
  if (environment !== 'production') return;

  useHead({
    script: [
      {
        async: true,
        src: 'https://umami.chrispaganon.com/script.js',
        'data-website-id': 'b185b424-185d-4bda-a23f-3e3bbf0cd54f"',
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
