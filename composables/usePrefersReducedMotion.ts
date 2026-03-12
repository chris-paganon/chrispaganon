export function usePrefersReducedMotion() {
  const reducedMotionPreference = usePreferredReducedMotion();

  return computed(() => reducedMotionPreference.value === 'reduce');
}
