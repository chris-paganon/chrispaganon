export function usePrefersReducedMotion() {
  const prefersReducedMotion = ref(true);
  let mediaQuery: MediaQueryList | null = null;

  const syncPreference = (
    event?: MediaQueryList | MediaQueryListEvent | null,
  ) => {
    prefersReducedMotion.value = event?.matches ?? mediaQuery?.matches ?? true;
  };

  onMounted(() => {
    if (!window.matchMedia) {
      prefersReducedMotion.value = false;
      return;
    }

    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    syncPreference(mediaQuery);
    mediaQuery.addEventListener('change', syncPreference);
  });

  onBeforeUnmount(() => {
    if (!mediaQuery) {
      return;
    }
    mediaQuery.removeEventListener('change', syncPreference);
  });

  return readonly(prefersReducedMotion);
}
