<template>
  <div class="portfolio-list">
    <motion.article
      v-for="(project, index) in portfolio"
      :key="project.id"
      class="portfolio-entry-shell"
      :class="{ 'is-offset': index % 2 === 1 }"
      :while-in-view="
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }
      "
      :viewport="{ once: true, amount: 0.18 }"
      :transition="getEntryTransition(index)"
    >
      <NuxtLink
        class="portfolio-entry"
        :to="
          localePath({ name: 'project-slug', params: { slug: project.slug } })
        "
        @mouseenter="activeProject = project.slug"
        @mouseleave="activeProject = null"
        @focusin="activeProject = project.slug"
        @focusout="activeProject = null"
      >
        <div class="portfolio-entry-head">
          <p class="portfolio-entry-index">
            {{ formatProjectIndex(index) }}
          </p>
          <motion.div
            class="portfolio-entry-rail"
            :animate="
              prefersReducedMotion
                ? undefined
                : isProjectActive(project.slug)
                  ? { x: [0, 28, 0], opacity: [0.45, 1, 0.45] }
                  : { x: 0, opacity: 0.45 }
            "
            :transition="
              isProjectActive(project.slug)
                ? {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
            "
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>

        <div
          class="portfolio-entry-layout"
          :class="{ reverse: index % 2 === 1 }"
        >
          <div class="portfolio-copy">
            <p class="portfolio-entry-label">
              {{ $t('PortfolioProjects.project-label') }}
            </p>
            <h3>{{ project.Title }}</h3>
            <p>{{ project.Description }}</p>
          </div>

          <motion.div
            class="portfolio-visual"
            :animate="
              prefersReducedMotion
                ? undefined
                : isProjectActive(project.slug)
                  ? {
                      y: -6,
                      rotate: index % 2 === 0 ? -0.6 : 0.6,
                    }
                  : { y: 0, rotate: 0 }
            "
            :transition="visualTransition"
          >
            <div class="portfolio-visual-frame">
              <motion.img
                :src="project.image"
                :alt="project.imageAlt"
                :animate="
                  prefersReducedMotion
                    ? undefined
                    : isProjectActive(project.slug)
                      ? {
                          scale: 1.05,
                          x: index % 2 === 0 ? 12 : -12,
                          filter: 'saturate(1.05)',
                        }
                      : { scale: 1, x: 0, filter: 'saturate(0.96)' }
                "
                :transition="imageTransition"
              />
            </div>

            <motion.span
              class="portfolio-visual-stamp"
              :class="{ 'is-left': index % 2 === 0 }"
              :animate="
                prefersReducedMotion
                  ? undefined
                  : isProjectActive(project.slug)
                    ? { rotate: [0, 6, -4, 0], y: [0, -5, 0] }
                    : { rotate: 0, y: 0 }
              "
              :transition="
                isProjectActive(project.slug)
                  ? {
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  : {
                      duration: 0.24,
                      ease: [0.22, 1, 0.36, 1],
                    }
              "
            >
              ↗
            </motion.span>
          </motion.div>
        </div>
      </NuxtLink>
    </motion.article>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const localePath = useLocalePath();
const prefersReducedMotion = usePrefersReducedMotion();
const activeProject = ref<string | null>(null);

const nuxtApp = useNuxtApp();
const { data: portfolio } = await useAsyncData('portfolio', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'project')
    .where({ slug: { $ne: 'progexia' } })
    .sort({ id: 1 })
    .find(),
);

const visualTransition = {
  type: 'spring',
  stiffness: 220,
  damping: 20,
} as const;

const imageTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
} as const;

function getEntryTransition(index: number) {
  return {
    duration: 0.58,
    delay: 0.05 + index * 0.09,
    ease: [0.22, 1, 0.36, 1],
  } as const;
}

function formatProjectIndex(index: number) {
  return `${index + 1}`.padStart(2, '0');
}

function isProjectActive(slug: string) {
  return activeProject.value === slug;
}
</script>

<style scoped>
.portfolio-list {
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
}

.portfolio-entry-shell {
  position: relative;
  border-top: 1px solid rgba(42, 32, 24, 0.14);
}

.portfolio-entry-shell:last-child {
  border-bottom: 1px solid rgba(42, 32, 24, 0.14);
}

.portfolio-entry-shell.is-offset .portfolio-entry {
  padding-left: 3rem;
}

.portfolio-entry {
  display: block;
  padding: 1.75rem 0;
  color: inherit;
  text-decoration: none;
}

.portfolio-entry-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.1rem;
}

.portfolio-entry-index {
  margin: 0;
  font-size: clamp(2.8rem, 7vw, 5.8rem);
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: rgba(42, 32, 24, 0.18);
}

.portfolio-entry-rail {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
}

.portfolio-entry-rail span {
  display: block;
  border-radius: 999px;
  background: rgba(57, 86, 117, 0.9);
}

.portfolio-entry-rail span:nth-child(1) {
  width: 2.6rem;
  height: 0.12rem;
}

.portfolio-entry-rail span:nth-child(2),
.portfolio-entry-rail span:nth-child(3) {
  width: 0.42rem;
  height: 0.42rem;
}

.portfolio-entry-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  align-items: center;
  gap: 2.25rem;
}

.portfolio-entry-layout.reverse {
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
}

.portfolio-entry-layout.reverse .portfolio-copy {
  order: 2;
}

.portfolio-entry-layout.reverse .portfolio-visual {
  order: 1;
}

.portfolio-copy {
  max-width: 34rem;
}

.portfolio-entry-label {
  margin: 0 0 0.75rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(57, 86, 117, 0.85);
}

.portfolio-copy h3 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  line-height: 1;
  text-wrap: balance;
}

.portfolio-copy p:last-child {
  margin: 1rem 0 0;
  max-width: 32rem;
  font-size: 1.02rem;
  line-height: 1.65;
  color: rgba(36, 28, 22, 0.72);
}

.portfolio-visual {
  position: relative;
  justify-self: end;
  width: min(100%, 25rem);
}

.portfolio-visual-frame {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, #eef4fb, #f8efe5);
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-visual-stamp {
  position: absolute;
  right: -0.6rem;
  bottom: -0.7rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: #f06a3b;
  color: #fff9f3;
  font-size: 1.2rem;
  box-shadow: 0 14px 28px rgba(240, 106, 59, 0.22);
}

.portfolio-visual-stamp.is-left {
  right: auto;
  left: -0.6rem;
}

@media (max-width: 900px) {
  .portfolio-entry-shell.is-offset .portfolio-entry {
    padding-left: 0;
  }

  .portfolio-entry-layout,
  .portfolio-entry-layout.reverse {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .portfolio-entry-layout.reverse .portfolio-copy,
  .portfolio-entry-layout.reverse .portfolio-visual {
    order: initial;
  }

  .portfolio-copy,
  .portfolio-copy p:last-child,
  .portfolio-visual {
    max-width: none;
  }

  .portfolio-visual {
    justify-self: stretch;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .portfolio-list {
    margin-top: 2rem;
  }

  .portfolio-entry {
    padding: 1.4rem 0;
  }

  .portfolio-entry-head {
    margin-bottom: 0.9rem;
  }

  .portfolio-entry-index {
    font-size: clamp(2.3rem, 18vw, 4rem);
  }

  .portfolio-copy h3 {
    font-size: clamp(1.45rem, 9vw, 2rem);
  }

  .portfolio-copy p:last-child {
    font-size: 0.97rem;
    line-height: 1.55;
  }

  .portfolio-visual-stamp {
    width: 2.6rem;
    height: 2.6rem;
    right: -0.35rem;
    bottom: -0.45rem;
  }

  .portfolio-visual-stamp.is-left {
    left: -0.35rem;
  }
}
</style>
