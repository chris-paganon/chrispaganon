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
        :key="job.company"
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
            <h3>{{ job.company }}</h3>
            <p class="work-role">{{ job.role }}</p>
          </div>
          <p class="work-dates">{{ job.dates }}</p>
        </div>
        <p class="work-description">{{ job.description }}</p>
        <NuxtLink
          v-if="job.link"
          class="work-link"
          :to="localePath(job.link)"
        >
          {{ $t('WorkExperience.learnMore') }}
        </NuxtLink>
      </motion.article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useReducedMotion } from 'motion-v';

const { tm } = useI18n();
const localePath = useLocalePath();
const prefersReducedMotion = useReducedMotion();

type WorkJob = {
  company: string;
  role: string;
  dates: string;
  description: string;
  link?: {
    name: string;
    params: {
      slug: string;
    };
  };
};

const jobs = computed(
  () => tm('WorkExperience.jobs') as unknown as WorkJob[]
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
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 240, 0.92));
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
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
  color: rgba(0, 0, 0, 0.68);
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
