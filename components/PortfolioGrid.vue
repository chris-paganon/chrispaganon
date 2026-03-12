<template>
  <div class="portfolio-wrapper">
    <motion.div
      v-for="(project, index) in portfolio"
      :key="project.id"
      class="portfolio-card-shell"
      :class="{ featured: index === 0 }"
      :initial="
        prefersReducedMotion
          ? undefined
          : { opacity: 0, y: 28, rotate: index % 2 === 0 ? -1.2 : 1.2 }
      "
      :while-in-view="
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: 0, rotate: 0 }
      "
      :while-hover="prefersReducedMotion ? undefined : { y: -4 }"
      :viewport="{ once: true, amount: 0.2 }"
      :transition="getCardTransition(index)"
    >
      <NuxtLink
        class="portfolio-card"
        :to="localePath({ name: 'project-slug', params: { slug: project.slug } })"
      >
        <div class="portfolio-image-frame">
          <img :src="project.image" :alt="project.imageAlt" />
        </div>
        <div class="portfolio-card-text-wrapper">
          <h3>{{ project.Title }}</h3>
          <p>{{ project.Description }}</p>
        </div>
      </NuxtLink>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { motion, useReducedMotion } from 'motion-v';

const localePath = useLocalePath();
const prefersReducedMotion = useReducedMotion();

const nuxtApp = useNuxtApp();
const { data: portfolio } = await useAsyncData('portfolio', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'project')
    .where({ slug: { $ne: 'progexia' } })
    .sort({ id: 1 })
    .find()
);

function getCardTransition(index: number) {
  return {
    duration: 0.48,
    delay: 0.06 + index * 0.08,
    ease: [0.22, 1, 0.36, 1],
  } as const;
}
</script>

<style scoped>
.portfolio-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-top: 35px;
}

.portfolio-card-shell {
  width: calc(50% - 12px);
}

.portfolio-card-shell.featured {
  width: 100%;
}

.portfolio-card {
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 10px;
  background: #fffaf3;
  text-decoration: none;
  color: inherit;
  transition: transform 250ms ease-out;
}

.portfolio-card::before {
  content: '';
  position: absolute;
  inset: 14px -14px -14px 14px;
  border-radius: 10px;
  background: #ffd8b8;
  opacity: 0.45;
  z-index: -1;
}

.portfolio-card-shell:nth-child(even) .portfolio-card::before {
  background: #cae0f4;
}

.portfolio-card:hover {
  transform: translateY(-2px);
}

.portfolio-image-frame {
  overflow: hidden;
  border-radius: 8px;
}

img {
  display: block;
  width: 100%;
  border-radius: 8px;
  transition:
    transform 450ms ease-out,
    filter 450ms ease-out;
}

.portfolio-card:hover img {
  transform: scale(1.02);
  filter: saturate(1.03);
}

.portfolio-card-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
  padding: 0.95rem 1rem;
  border: 1px solid rgba(42, 32, 24, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6);
}

.portfolio-card-text-wrapper h3,
.portfolio-card-text-wrapper p {
  margin: 0;
  text-align: left;
}

.portfolio-card-text-wrapper p {
  color: rgba(36, 28, 22, 0.74);
}

@media (max-width: 850px) {
  .portfolio-card-shell,
  .portfolio-card-shell.featured {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .portfolio-wrapper {
    gap: 18px;
  }

  .portfolio-card {
    padding: 12px;
  }

  .portfolio-card::before {
    inset: 10px -10px -10px 10px;
  }
}
</style>
