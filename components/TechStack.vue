<template>
  <section class="tech-stack-section content-section">
    <h2>{{ $t('TechStack.heading') }}</h2>
    <p>
      <em>{{ $t('TechStack.subHeading') }}</em>
    </p>
    <TechStackSection :techlist="mainTechList" title="favorites" />
    <TechStackSection :techlist="otherTechList" title="others" />

    <div class="tech-stack-wrapper">
      <p>
        <em>{{ $t('TechStack.note') }}</em>
      </p>
      <ul>
        <li>
          <img src="/images/logos/reactjs.png" alt="React" class="icon" />
        </li>
        <li>
          <img src="/images/logos/nextjs.png" alt="Next.js" class="icon" />
        </li>
      </ul>
    </div>
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
  'html',
  'css',
  'typescript',
  'vuejs',
  'nuxt',
  'php',
  'sql',
  'docker',
  'linux',
];
const otherTechList = [
  'nodejs',
  'python',
  'llamaindex',
  'wordpress',
  'tailwind',
  'bootstrap',
];
</script>

<style scoped>
.tech-stack-section {
  text-align: center;
}
h2 {
  margin-bottom: 0.2em;
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
@media (max-width: 450px) {
  .button {
    font-size: 18px;
    padding: 15px 25px;
  }
}
</style>
