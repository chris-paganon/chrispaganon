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
  queryContent(nuxtApp.$i18n.locale.value, `work/${route.params.slug}`).findOne()
);
</script>

<style scoped>
article {
  max-width: 1024px;
  margin: 40px auto;
  padding: 0px 20px;
}
.project-info a,
.project-info li {
  font-size: 25px;
}
p {
  margin: 20px 0;
}

.hero-banner {
  min-height: 300px;
}

ul.project-info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
  text-align: center;
}
.project-info li {
  padding: 0 15px;
  margin-bottom: 15px;
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
    font-size: 22px;
  }
}
</style>
