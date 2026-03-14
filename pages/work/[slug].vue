<template>
  <main v-if="workContent">
    <section
      class="hero-banner"
      :style="{ backgroundColor: `#${workContent.color}` }"
    >
      <h1>{{ workContent.Title }}</h1>
    </section>
    <article>
      <ul class="project-info">
        <li>{{ $t('ProjectPage.date-from') }} {{ workContent.startDate }}</li>
        <li>{{ $t('ProjectPage.date-to') }} {{ workContent.endDate }}</li>
        <li v-if="workContent.url">
          <a :href="workContent.url" target="_blank">{{
            $t('ProjectPage.visit')
          }}</a>
        </li>
      </ul>
      <ContentRenderer :content="workContent">
        <ContentRendererMarkdown :value="workContent" class="project-content" />
      </ContentRenderer>
    </article>
  </main>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const route = useRoute();

const { data: workContent } = await useAsyncData('work', () =>
  queryContent(
    nuxtApp.$i18n.locale.value,
    `work/${route.params.slug}`,
  ).findOne(),
);
</script>

<style scoped>
article {
  position: relative;
  max-width: 1024px;
  margin: 48px auto;
  padding: 28px 24px;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 10px;
  background: #f8fbff;
}

.project-info a,
.project-info li {
  font-size: 22px;
}
p {
  margin: 20px 0;
}

.hero-banner {
  min-height: 190px;
  display: flex;
  align-items: end;
  padding-bottom: 40px;
}

ul.project-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
  text-align: center;
}
.project-info li {
  padding: 10px 14px;
  margin-bottom: 0;
  border: 1px solid rgba(58, 79, 102, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.62);
}

:deep(img) {
  max-width: 800px;
  display: block;
  margin: 60px auto;
  width: 600px;
  max-width: 100%;
}

:deep(.project-content ul) {
  list-style: disc;
  padding-left: 40px;
}

@media (max-width: 600px) {
  .project-info a,
  .project-info li {
    font-size: 19px;
  }

  article {
    margin: 36px 20px;
    padding: 20px 16px;
  }

  article::before {
    inset: 12px -12px -12px 12px;
  }
}
</style>
