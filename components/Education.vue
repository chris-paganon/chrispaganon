<template>
  <section class="education-section content-section">
    <motion.div
      class="education-content"
      :initial="prefersReducedMotion ? undefined : { opacity: 0, y: 24 }"
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.3 }"
      :transition="{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }"
    >
      <h2>{{ $t('Education.heading') }}</h2>
      <div class="education-card">
        <div class="education-card-header">
          <div>
            <h3>McGill University</h3>
            <p class="education-detail">B.Eng. Mechanical Engineering</p>
          </div>
          <p class="education-meta">Montreal, Canada &middot; 2018</p>
        </div>
        <p class="education-footnote">
          {{ $t('Education.footnote') }}
        </p>
      </div>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const reducedMotionPreference = usePreferredReducedMotion();
const prefersReducedMotion = computed(
  () => reducedMotionPreference.value === 'reduce',
);
</script>

<style scoped>
.education-section {
  padding-top: 0;
  padding-bottom: 80px;
}

.education-content {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.education-content h2 {
  margin-bottom: 0.6em;
}

.education-card {
  padding: 28px;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 10px;
  background: #fffaf3;
  text-align: left;
}

.education-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.education-card h3 {
  margin-bottom: 0.25em;
}

.education-detail,
.education-meta {
  color: rgba(36, 28, 22, 0.68);
  font-weight: 600;
}

.education-footnote {
  margin-top: 14px;
  font-size: 0.92rem;
  color: rgba(36, 28, 22, 0.55);
  font-style: italic;
}

@media (max-width: 800px) {
  .education-card-header {
    flex-direction: column;
  }
}
</style>
