<template>
  <section class="agents-section content-section">
    <motion.div
      class="agents-content"
      :initial="prefersReducedMotion ? undefined : { opacity: 0, y: 28 }"
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.2 }"
      :transition="sectionTransition"
    >
      <div class="agents-heading-row">
        <h2>{{ $t('CodingAgents.heading') }}</h2>
        <span class="cursor-blink" aria-hidden="true">_</span>
      </div>

      <div class="agents-card">
        <p>{{ $t('CodingAgents.intro') }}</p>
        <p>{{ $t('CodingAgents.shift') }}</p>
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

const sectionTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
} as const;
</script>

<style scoped>
.agents-section {
  padding-top: 0;
  padding-bottom: 20px;
}

.agents-content {
  max-width: 760px;
  margin: 0 auto;
}

.agents-heading-row {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.15em;
  margin-bottom: 0.6em;
  text-align: center;
}

.agents-heading-row h2 {
  margin-bottom: 0;
}

.cursor-blink {
  font-size: 0.85em;
  font-weight: 600;
  color: rgba(36, 28, 22, 0.7);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor-blink {
    animation: none;
  }
}

.agents-card {
  padding: 28px 32px;
  border: 1px solid rgba(58, 79, 102, 0.14);
  border-radius: 10px;
  background: #f8fbff;
  position: relative;
  overflow: hidden;
}

.agents-card::before {
  content: '>';
  position: absolute;
  top: 22px;
  left: -6px;
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(58, 79, 102, 0.07);
  font-family: monospace;
  line-height: 1;
  pointer-events: none;
}

.agents-card p {
  line-height: 1.7;
  margin-bottom: 1em;
  font-size: 1.2rem;
}

.agents-card p:last-child {
  margin-bottom: 0;
}

.agents-footnote {
  font-size: 0.92rem;
  color: rgba(36, 28, 22, 0.55);
  font-style: italic;
}

@media (max-width: 600px) {
  .agents-card {
    padding: 24px 20px;
  }
}

@media (max-width: 450px) {
  .agents-card {
    padding: 20px 16px;
  }
}
</style>
