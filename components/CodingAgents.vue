<template>
  <section class="agents-section content-section">
    <motion.div
      class="agents-content"
      :initial="prefersReducedMotion ? undefined : { opacity: 0, y: 28 }"
      :animate="prefersReducedMotion ? { opacity: 1, y: 0 } : undefined"
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.2 }"
      :transition="sectionTransition"
    >
      <div class="agents-heading-row">
        <h2>{{ $t('CodingAgents.heading') }}</h2>
        <span class="cursor-blink" aria-hidden="true">_</span>
      </div>

      <div class="agents-card-glow">
        <div class="agents-card">
          <p>{{ $t('CodingAgents.intro') }}</p>
          <p>{{ $t('CodingAgents.shift') }}</p>
        </div>
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

@property --border-angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0deg;
}

@keyframes borderSpin {
  to {
    --border-angle: 360deg;
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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

.agents-card-glow {
  --border-angle: 0deg;
  position: relative;
  padding: 2px;
  border-radius: 17px;
  background: conic-gradient(
    from var(--border-angle),
    #7c3aed,
    #06b6d4,
    #a855f7,
    #e879f9,
    #06b6d4,
    #7c3aed
  );
  animation: borderSpin 22s linear infinite;
}

.agents-card {
  position: relative;
  padding: 28px 32px;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    var(--panel-cream) 0%,
    var(--panel-peach) 33%,
    var(--panel-blue) 66%,
    var(--panel-cream) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

.agents-card p {
  font-size: 20px;
  line-height: 1.45;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.agents-card p:last-child {
  margin-bottom: 0;
}

.agents-card p:first-child::before {
  content: '>';
  position: absolute;
  top: -8px;
  left: -20px;
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(139, 92, 246, 0.15);
  font-family: monospace;
  line-height: 1;
  pointer-events: none;
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
  .agents-card p {
    font-size: 19px;
  }
}

@media (max-width: 450px) {
  .agents-card {
    padding: 20px 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .agents-card-glow,
  .agents-card {
    animation: none;
  }
}
</style>
