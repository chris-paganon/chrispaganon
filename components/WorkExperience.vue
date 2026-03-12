<template>
  <section id="work-experience" class="work-section-wrapper content-section">
    <motion.div
      class="work-section-intro"
      :initial="prefersReducedMotion ? undefined : { opacity: 0, y: 32 }"
      :while-in-view="prefersReducedMotion ? undefined : { opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.2 }"
      :transition="sectionTransition"
    >
      <h2>{{ $t('WorkExperience.heading') }}</h2>
      <p>{{ $t('WorkExperience.intro') }}</p>
    </motion.div>

    <div class="work-grid">
      <motion.article
        v-for="(job, index) in jobs"
        :key="job.slug"
        class="work-card"
        :initial="
          prefersReducedMotion ? undefined : { opacity: 0, y: 36, scale: 0.98 }
        "
        :while-in-view="
          prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
        "
        :viewport="{ once: true, amount: 0.25 }"
        :transition="getCardTransition(index)"
      >
        <div class="work-card-header">
          <div>
            <h3>{{ job.Title }}</h3>
            <p class="work-role">{{ job.role }}</p>
          </div>
          <p class="work-dates">{{ job.startDate }} - {{ job.endDate }}</p>
        </div>
        <p class="work-description">{{ job.Description }}</p>
        <NuxtLink
          v-if="job.slug"
          class="work-link"
          :to="localePath({ name: 'work-slug', params: { slug: job.slug } })"
        >
          {{ $t('WorkExperience.learnMore') }}
        </NuxtLink>
      </motion.article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const nuxtApp = useNuxtApp();
const localePath = useLocalePath();
const reducedMotionPreference = usePreferredReducedMotion();
const prefersReducedMotion = computed(
  () => reducedMotionPreference.value === 'reduce',
);
const { data: jobs } = await useAsyncData('work-experience', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'work').sort({ id: 1 }).find()
);

const sectionTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
} as const;

function getCardTransition(index: number) {
  return {
    duration: 0.48,
    delay: 0.08 + index * 0.1,
    ease: [0.22, 1, 0.36, 1],
  } as const;
}
</script>

<style scoped>
.work-section-wrapper {
  padding-top: 20px;
  padding-bottom: 80px;
}

.work-section-intro {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 40px auto;
}

.work-section-intro h2 {
  margin-bottom: 0.4em;
}

.work-section-intro p {
  font-size: 1.05rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.work-card {
  padding: 28px;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 10px;
  background: #fffaf3;
  box-shadow: none;
}

.work-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.work-card h3 {
  margin-bottom: 0.25em;
}

.work-role,
.work-dates {
  color: rgba(36, 28, 22, 0.68);
  font-weight: 600;
}

.work-description {
  margin-bottom: 18px;
  line-height: 1.6;
}

.work-link {
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 200ms ease-out,
    opacity 200ms ease-out;
}

.work-link:hover {
  transform: translateX(3px);
  opacity: 0.75;
}

@media (max-width: 800px) {
  .work-grid {
    grid-template-columns: 1fr;
  }

  .work-card-header {
    flex-direction: column;
  }
}
</style>
