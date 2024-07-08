<template>
  <main v-if="projectContent">
    <section
      class="hero-banner"
      :style="{ backgroundColor: `#${projectContent.color}` }"
    >
      <h1>{{ projectContent.Title }}</h1>
    </section>
    <article>
      <ul class="project-info">
        <li>
          {{ $t('ProjectPage.date-from') }} {{ projectContent.startDate }}
        </li>
        <li>{{ $t('ProjectPage.date-to') }} {{ projectContent.endDate }}</li>
        <li>
          <a :href="projectContent.url" target="_blank">{{
            $t('ProjectPage.visit')
          }}</a>
        </li>
        <li v-if="projectContent.githubUrl">
          <NuxtLink
            id="github-link"
            :to="projectContent.githubUrl"
            target="_blank"
          >
            <img
              id="github-logo"
              src="/images/logos/github.png"
              alt="GitHub"
              class="icon"
              width="24px"
            />
          </NuxtLink>
        </li>
      </ul>
      <ContentRenderer :content="projectContent">
        <ContentRendererMarkdown
          :value="projectContent"
          class="project-content"
        />
      </ContentRenderer>
    </article>
  </main>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const route = useRoute();

const { data: projectContent } = await useAsyncData('services', () =>
  queryContent(
    nuxtApp.$i18n.locale.value,
    `project/${route.params.slug}`
  ).findOne()
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

:deep(img:not(#github-logo)) {
  max-width: 800px;
  display: block;
  margin: 60px auto;
  width: 600px;
  max-width: 100%;
}
#github-logo {
  transition: transform 250ms ease-out;
}
#github-logo:hover {
  transform: scale(1.25);
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
