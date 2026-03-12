<template>
  <section id="portfolio" class="portfolio-section-wrapper content-section">
    <motion.div
      class="portfolio-intro-block"
      :initial="prefersReducedMotion ? undefined : { opacity: 0, y: 28 }"
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.15 }"
      :transition="introTransition"
    >
      <h2 class="portfolio-heading">{{ $t('PortfolioProjects.heading') }}</h2>
      <div
        :class="`portfolio-intro-wrapper ${viewMoreClass}`"
        @click="viewMoreOn = !viewMoreOn"
      >
        <div v-if="!viewMoreOn" class="view-more-overlay"></div>
        <ContentRenderer v-if="portfolioIntro" :content="portfolioIntro">
          <ContentRendererMarkdown :value="portfolioIntro" />
        </ContentRenderer>
      </div>
      <button
        class="portfolio-intro-toggle"
        type="button"
        :aria-expanded="viewMoreOn"
        @click.stop="viewMoreOn = !viewMoreOn"
      >
        <span class="arrow" :class="{ 'arrow-open': viewMoreOn }"></span>
      </button>
    </motion.div>
    <motion.div
      :initial="prefersReducedMotion ? undefined : { opacity: 0, y: 36 }"
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.1 }"
      :transition="gridTransition"
    >
      <h3 class="portfolio-sub-heading">
        {{ $t('PortfolioProjects.sub-heading') }}
      </h3>
      <PortfolioGrid />
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion, useReducedMotion } from 'motion-v';

const nuxtApp = useNuxtApp();
const viewMoreOn = ref(false);
const viewMoreClass = computed(() =>
  viewMoreOn.value ? 'view-more-on' : 'view-more-off'
);
const prefersReducedMotion = useReducedMotion();

const introTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
} as const;

const gridTransition = {
  duration: 0.55,
  delay: 0.08,
  ease: [0.22, 1, 0.36, 1],
} as const;

const { data: portfolioIntro } = await useAsyncData('portfolio-intro', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'portfolio-intro').findOne()
);
</script>

<style scoped>
.portfolio-intro-block {
  width: 100%;
}

.portfolio-heading {
  text-align: left;
  margin-bottom: 30px;
}

.portfolio-intro-wrapper {
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 1.4rem 1.5rem;
  border: 1px solid rgba(58, 79, 102, 0.12);
  border-radius: 10px;
  background: #f8fbff;
  transform-origin: top left;
}

.portfolio-intro-wrapper {
  position: relative;
  max-height: 560px;
  overflow: hidden;
  transition:
    max-height 420ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 320ms ease-out,
    background-color 320ms ease-out;
}
@media (max-width: 575px) {
  .portfolio-intro-wrapper {
    max-height: 800px;
  }
}
.portfolio-intro-wrapper.view-more-off {
  max-height: 4em;
  transform: translateY(0);
}

.portfolio-intro-wrapper.view-more-on {
  transform: translateY(2px);
}
.view-more-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #f8fbff, #f8fbff00);
  z-index: 10;
  pointer-events: none;
}

.portfolio-intro-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-top: 16px;
  border: 1px solid rgba(58, 79, 102, 0.12);
  border-radius: 10px;
  background: #f8fbff;
  cursor: pointer;
  transition:
    transform 220ms ease-out,
    background-color 220ms ease-out;
}

.portfolio-intro-toggle:hover {
  transform: translateY(-2px);
  background: #eef6fd;
}

.arrow {
  position: relative;
  width: 18px;
  height: 18px;
  animation: arrowNudge 1.8s ease-in-out infinite;
}

.arrow::before,
.arrow::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 11px;
  height: 11px;
  border-right: 3px solid #1f1712;
  border-bottom: 3px solid #1f1712;
  transform-origin: center;
}

.arrow::before {
  top: 0;
  transform: translateX(-50%) rotate(45deg);
}

.arrow::after {
  top: 6px;
  transform: translateX(-50%) rotate(45deg);
  opacity: 0.65;
}

.arrow-open {
  animation: none;
  transform: rotate(180deg);
}
.portfolio-intro {
  display: block;
  margin-bottom: 30px;
}

.portfolio-sub-heading {
  margin: 60px 0 30px 0;
  text-align: center;
}

@keyframes arrowNudge {
  0%,
  100% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(3px);
  }
  60% {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-intro-wrapper,
  .portfolio-intro-toggle,
  .arrow {
    transition: none;
    animation: none;
  }
}
</style>
