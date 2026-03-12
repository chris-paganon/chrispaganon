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
      <div class="portfolio-intro-stage">
        <div class="portfolio-intro-toolbar">
          <motion.button
            class="portfolio-intro-toggle"
            type="button"
            :aria-expanded="viewMoreOn"
            :while-hover="prefersReducedMotion ? undefined : { y: -2 }"
            :while-focus="prefersReducedMotion ? undefined : { y: -2 }"
            :transition="hoverTransition"
            @click="viewMoreOn = !viewMoreOn"
          >
            <span class="sr-only">
              {{ viewMoreOn ? 'Collapse portfolio intro' : 'Expand portfolio intro' }}
            </span>
            <motion.span
              class="arrow-shell"
              :animate="prefersReducedMotion ? undefined : arrowAnimation"
              :transition="arrowTransition"
            >
              <span class="arrow"></span>
            </motion.span>
          </motion.button>
        </div>

        <motion.div
          class="portfolio-intro-wrapper"
          :animate="
            prefersReducedMotion
              ? undefined
              : viewMoreOn
                ? { height: 'auto' }
                : { height: `${collapsedHeight}px` }
          "
          :transition="panelTransition"
        >
          <div class="portfolio-intro-copy" :class="{ collapsed: !viewMoreOn }">
            <ContentRenderer v-if="portfolioIntro" :content="portfolioIntro">
              <ContentRendererMarkdown :value="portfolioIntro" />
            </ContentRenderer>
          </div>
          <div v-if="!viewMoreOn" class="view-more-overlay"></div>
        </motion.div>
      </div>
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
const prefersReducedMotion = useReducedMotion();
const collapsedHeight = 184;
const smoothEase = [0.22, 1, 0.36, 1] as const;

const introTransition = {
  duration: 0.5,
  ease: smoothEase,
} as const;

const gridTransition = {
  duration: 0.55,
  delay: 0.08,
  ease: smoothEase,
} as const;

const panelTransition = {
  duration: 0.48,
  ease: smoothEase,
} as const;

const hoverTransition = {
  type: 'spring',
  stiffness: 280,
  damping: 18,
} as const;

const arrowAnimation = computed(() =>
  viewMoreOn.value ? { rotate: 180, y: 0 } : { rotate: 0, y: [0, 3, 0] }
);

const arrowTransition = computed(() =>
  viewMoreOn.value
    ? {
        duration: 0.28,
        ease: smoothEase,
      }
    : {
        duration: 1.45,
        repeat: Infinity,
        repeatDelay: 0.35,
        ease: smoothEase,
      }
);

const { data: portfolioIntro } = await useAsyncData('portfolio-intro', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'portfolio-intro').findOne()
);
</script>

<style scoped>
.portfolio-intro-block {
  width: 100%;
}

.portfolio-intro-stage {
  position: relative;
  padding: 1.1rem;
  border: 1px solid rgba(58, 79, 102, 0.12);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.45);
}

.portfolio-intro-toolbar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.portfolio-heading {
  margin: 0 0 1rem;
  text-align: left;
}

.portfolio-intro-wrapper {
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 11.5rem;
  border: 1px solid rgba(58, 79, 102, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.72);
}

.portfolio-intro-copy {
  padding: 1.1rem 1.1rem 1.2rem;
}

.portfolio-intro-copy.collapsed {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.view-more-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0));
  z-index: 2;
  pointer-events: none;
}

.portfolio-intro-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid rgba(58, 79, 102, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  flex-shrink: 0;
}

.portfolio-intro-toggle:focus-visible {
  box-shadow: 0 0 0 3px rgba(58, 79, 102, 0.12);
}

.arrow-shell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
}

.arrow {
  width: 0.7rem;
  height: 0.7rem;
  border-right: 2px solid rgba(36, 28, 22, 0.88);
  border-bottom: 2px solid rgba(36, 28, 22, 0.88);
  transform: rotate(45deg) translate(-1px, -1px);
}

.portfolio-intro {
  display: block;
  margin-bottom: 30px;
}

.portfolio-sub-heading {
  margin: 60px 0 30px 0;
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 575px) {
  .portfolio-intro-stage {
    padding: 1rem;
  }

  .portfolio-intro-toolbar {
    align-items: center;
  }

  .portfolio-intro-wrapper {
    min-height: 13.5rem;
  }

  .portfolio-intro-copy.collapsed {
    -webkit-line-clamp: 6;
  }
}

@media (max-width: 450px) {
  .portfolio-intro-toolbar {
    gap: 0.75rem;
  }

  .portfolio-intro-copy {
    padding: 1rem;
  }
}
</style>
