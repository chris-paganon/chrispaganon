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
    `project/${route.params.slug}`,
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
  background: #fffaf3;
}

.project-info a,
.project-info li {
  font-size: 22px;
}
p {
  margin: 20px 0;
}

.hero-banner {
  min-height: 300px;
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
  border: 1px solid rgba(42, 32, 24, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.65);
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
