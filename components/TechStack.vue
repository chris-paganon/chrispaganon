<template>
  <section class="tech-stack-section content-section">
    <h2>{{ $t('TechStack.heading') }}</h2>
    <TechStackSection :techlist="mainTechList" title="favorites" />
    <TechStackSection :techlist="otherTechList" title="others" />
    <NuxtLink
      :to="localePath({ path: '/', hash: '#contact-me' })"
      class="contact-me-btn button"
    >
      {{ $t('NavBar.contact-me') }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const mainTechList = [
  'vuejs',
  'nuxt',
  'reactjs',
  'tailwind',
  'typescript',
  'sql',
  'docker',
  'linux',
];
const otherTechList = [
  'nextjs',
  'nodejs',
  'vite',
  'firebase',
  'llamaindex',
  'php',
  'wordpress',
  'python',
  'golang',
];
</script>

<style scoped>
.tech-stack-section {
  text-align: center;
}
h2 {
  margin-bottom: 0.8em;
}

.tech-stack-section > p {
  max-width: 38rem;
  margin: 0 auto 2rem auto;
}

:deep(ul) {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
:deep(li img) {
  object-fit: contain;
  height: 60px;
  width: 80px;
  transition: width 0.75s;
}

.button {
  margin: 40px auto 20px auto;
  font-size: 20px;
  border-radius: 30px;
}
@media (max-width: 600px) {
  .tech-stack-section.content-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 450px) {
  .button {
    font-size: 18px;
    padding: 15px 25px;
  }
}
</style>
