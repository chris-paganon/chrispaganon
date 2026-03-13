<template>
  <!--
    V2 — "Expanding Strips"
    Full-width horizontal bands. Default: compact with number + title.
    Hover expands to reveal image + description with project-color wash.
  -->
  <div ref="stripsContainer" class="v2-strips">
    <motion.article
      v-for="(project, index) in portfolio"
      :key="project.id"
      class="v2-strip"
      :data-slug="project.slug"
      :initial="
        prefersReducedMotion
          ? undefined
          : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
      "
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, x: 0 }"
      :viewport="{ once: true, amount: 0.2 }"
      :transition="{
        duration: 0.55,
        delay: 0.04 + index * 0.07,
        ease: smoothEase,
      }"
    >
      <NuxtLink
        class="v2-strip-link"
        :to="
          localePath({ name: 'project-slug', params: { slug: project.slug } })
        "
        @mouseenter="hoverProject = project.slug"
        @mouseleave="hoverProject = null"
        @focusin="hoverProject = project.slug"
        @focusout="hoverProject = null"
      >
        <motion.div
          class="v2-strip-bg"
          :style="{ '--project-color': `#${project.color}` }"
          :animate="
            prefersReducedMotion
              ? undefined
              : isActive(project.slug)
                ? { opacity: 0.07 }
                : { opacity: 0 }
          "
          :transition="{ duration: 0.4, ease: smoothEase }"
        ></motion.div>

        <div class="v2-strip-header">
          <div class="v2-left">
            <span class="v2-idx">{{ formatIdx(index) }}</span>
            <motion.span
              class="v2-dot"
              :style="{ background: `#${project.color}` }"
              :animate="
                prefersReducedMotion
                  ? undefined
                  : isActive(project.slug)
                    ? { scale: 1.8 }
                    : { scale: 1 }
              "
              :transition="{ type: 'spring', stiffness: 300, damping: 18 }"
            ></motion.span>
            <h3>{{ project.Title }}</h3>
          </div>

          <motion.span
            class="v2-peek-label"
            :animate="
              prefersReducedMotion
                ? undefined
                : isActive(project.slug)
                  ? { opacity: 0, y: -6 }
                  : { opacity: 0.5, y: 0 }
            "
            :transition="{ duration: 0.25, ease: smoothEase }"
          >
            {{ project.startDate }}
          </motion.span>
        </div>

        <motion.div
          class="v2-reveal"
          :animate="
            prefersReducedMotion
              ? { height: 'auto' }
              : isActive(project.slug)
                ? { height: 'auto', opacity: 1 }
                : { height: '0px', opacity: 0 }
          "
          :transition="{ duration: 0.45, ease: smoothEase }"
        >
          <div class="v2-reveal-inner">
            <div class="v2-reveal-image">
              <img :src="project.image" :alt="project.imageAlt" />
            </div>
            <div class="v2-reveal-copy">
              <p>{{ project.Description }}</p>
              <span class="v2-view-link">
                View project
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 15L15 5M15 5H7M15 5V13"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
      </NuxtLink>
    </motion.article>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const localePath = useLocalePath();
const reducedMotionPreference = usePreferredReducedMotion();
const prefersReducedMotion = computed(
  () => reducedMotionPreference.value === 'reduce',
);
const smoothEase = [0.22, 1, 0.36, 1] as const;

// Hover-based activation (desktop)
const hoverProject = ref<string | null>(null);
// Scroll-based activation (works on mobile too)
const scrollProject = ref<string | null>(null);

// The active project is whichever source set it last — hover takes priority
const activeProject = computed(() => hoverProject.value ?? scrollProject.value);

const stripsContainer = useTemplateRef<HTMLElement>('stripsContainer');

const nuxtApp = useNuxtApp();
const { data: portfolio } = await useAsyncData('portfolio', async () => {
  const items = await queryContent(nuxtApp.$i18n.locale.value, 'project')
    .where({ slug: { $ne: 'progexia' } })
    .find();
  return items.sort((a, b) => Number(a.id ?? 0) - Number(b.id ?? 0));
});

// Observe each strip via data-slug: when it enters the center band, auto-expand
const stripElements = computed<HTMLElement[]>(() => {
  const container = stripsContainer.value;
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>('.v2-strip[data-slug]'),
  );
});

useIntersectionObserver(
  stripElements,
  (entries) => {
    for (const entry of entries) {
      const slug = (entry.target as HTMLElement).dataset.slug;
      if (!slug) continue;

      if (entry.isIntersecting) {
        scrollProject.value = slug;
      } else if (scrollProject.value === slug) {
        scrollProject.value = null;
      }
    }
  },
  {
    rootMargin: '-38% 0px -38% 0px',
    threshold: 0,
  },
);

function formatIdx(i: number) {
  return `${i + 1}`.padStart(2, '0');
}
function isActive(slug: string) {
  return activeProject.value === slug;
}
</script>

<style scoped>
.v2-strips {
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
}

.v2-strip {
  position: relative;
  border-top: 1px solid rgba(42, 32, 24, 0.1);
}
.v2-strip:last-child {
  border-bottom: 1px solid rgba(42, 32, 24, 0.1);
}

.v2-strip-link {
  display: block;
  padding: 1.5rem 0.5rem;
  color: inherit;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.v2-strip-bg {
  position: absolute;
  inset: 0;
  background: var(--project-color);
  pointer-events: none;
  z-index: 0;
}

.v2-strip-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.v2-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.v2-idx {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(42, 32, 24, 0.3);
  flex-shrink: 0;
  width: 1.8rem;
}

.v2-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  flex-shrink: 0;
}

.v2-left h3 {
  margin: 0;
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v2-peek-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(57, 86, 117, 0.85);
  flex-shrink: 0;
}

.v2-reveal {
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.v2-reveal-inner {
  display: grid;
  grid-template-columns: minmax(200px, 0.45fr) 1fr;
  gap: 1.5rem;
  padding-top: 1.2rem;
  padding-bottom: 0.4rem;
}

.v2-reveal-image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 6px;
  background: linear-gradient(135deg, #eef4fb, #f8efe5);
}
.v2-reveal-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v2-reveal-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.v2-reveal-copy p {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--ink-soft, rgba(36, 28, 22, 0.72));
}

.v2-view-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.8rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(42, 32, 24, 0.6);
}

@media (max-width: 700px) {
  .v2-reveal-inner {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .v2-left h3 {
    white-space: normal;
  }
  .v2-strips {
    margin-top: 2rem;
  }
}
</style>
