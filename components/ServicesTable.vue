<template>
  <section class="services-section content-section">
    <h2>{{ $t('ServicesTable.heading') }}</h2>
    <p>
      {{ $t('ServicesTable.sub-heading.part1') }}
      <strong>{{ $t('ServicesTable.sub-heading.bold') }}</strong>
      {{ $t('ServicesTable.sub-heading.part2') }}
    </p>
    <div v-if="services" class="services-wrapper">
      <div
        v-for="service in services"
        :key="service.id"
        class="service-wrapper"
      >
        <ContentRenderer :content="service">
          <div class="service-title">
            <p class="icon">{{ service.icon }}</p>
            <p>{{ service.title }}</p>
          </div>
          <ContentRendererMarkdown :value="service" />
        </ContentRenderer>
      </div>
    </div>
    <p>
      <em>{{ $t('ServicesTable.note') }}</em>
    </p>
    <NuxtLink
      :to="localePath({ path: '/#contact-me' })"
      class="contact-me-btn button"
    >
      {{ $t('NavBar.contact-me') }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const localePath = useLocalePath();

const { data: services } = await useAsyncData('en-services', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'services').find()
);
</script>

<style scoped>
.services-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 60px auto 40px auto;
  border: 1px solid gray;
  border-radius: 15px;
}
.service-wrapper {
  width: 33%;
  text-align: center;
}
.service-wrapper:not(:last-child) {
  border-right: 1px solid gray;
}

.service-title {
  padding: 20px 20px 5px 20px;
  margin: auto;
}
.service-title p {
  font-weight: 600;
}
:deep(.nuxt-content ul) {
  padding: 5px 20px 20px 20px;
  font-size: 19px;
}
:deep(.nuxt-content li) {
  margin: 10px 0;
}
.icon {
  font-size: 40px;
  margin-bottom: 20px;
}

@media (max-width: 850px) {
  .service-wrapper {
    width: 100%;
  }
  .service-wrapper:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid gray;
  }
}

.button {
  margin: 60px auto 20px auto;
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
