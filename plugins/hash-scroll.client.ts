const INITIAL_SCROLL_DELAY_MS = 180;
const RETRY_SCROLL_DELAY_MS = 120;
const MAX_SCROLL_ATTEMPTS = 8;
const HASH_SCROLL_OFFSET_PX = 32;

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function scrollToHash(hash: string) {
  const selector = decodeURIComponent(hash);

  for (let attempt = 0; attempt < MAX_SCROLL_ATTEMPTS; attempt += 1) {
    await nextTick();
    await wait(
      attempt === 0 ? INITIAL_SCROLL_DELAY_MS : RETRY_SCROLL_DELAY_MS,
    );

    const element = document.querySelector<HTMLElement>(selector);

    if (!element) {
      continue;
    }

    const top =
      window.scrollY +
      element.getBoundingClientRect().top -
      HASH_SCROLL_OFFSET_PX;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'auto',
    });
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  const syncHashScroll = async () => {
    const { hash } = router.currentRoute.value;

    if (!hash || hash === '#') {
      return;
    }

    await scrollToHash(hash);
  };

  nuxtApp.hook('app:mounted', syncHashScroll);
  nuxtApp.hook('page:finish', syncHashScroll);
});
