<template>
  <section id="portfolio" class="portfolio-section-wrapper content-section">
    <h2 class="portfolio-heading">{{ $t('PortfolioProjects.heading') }}</h2>
    <div :class="`portfolio-intro-wrapper ${viewMoreClass}`">
      <div v-if="!viewMoreOn" class="view-more-overlay"></div>
      <ContentRenderer v-if="portfolioIntro" :content="portfolioIntro">
        <ContentRendererMarkdown :value="portfolioIntro" />
      </ContentRenderer>
    </div>
    <div
      v-if="!viewMoreOn"
      class="arrow arrow-down"
      @click="viewMoreOn = true"
    ></div>
    <div
      v-if="viewMoreOn"
      class="arrow arrow-up"
      @click="viewMoreOn = false"
    ></div>
    <h3 class="portfolio-sub-heading">
      {{ $t('PortfolioProjects.sub-heading') }}
    </h3>
    <PortfolioGrid />
  </section>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const viewMoreOn = ref(false);
const viewMoreClass = computed(() =>
  viewMoreOn.value ? 'view-more-on' : 'view-more-off'
);

const { data: portfolioIntro } = await useAsyncData('portfolio-intro', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'portfolio-intro').findOne()
);
</script>

<style scoped>
.arrow {
  width: 15px;
  height: 15px;
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  margin: 20px auto 0 auto;
  cursor: pointer;
}
.arrow-down {
  animation: bounce 2s infinite;
}
.arrow-up {
  transform: rotate(-135deg);
}
@keyframes bounce {
  0% {
    transform: rotate(45deg) translate(0, 0);
  }
  70% {
    transform: rotate(45deg) translate(-8px, -8px);
  }
  100% {
    transform: rotate(45deg) translate(0, 0);
  }
}

.portfolio-intro-wrapper {
  position: relative;
  max-height: 500px;
  overflow: hidden;
  transition: max-height 500ms ease-out;
}
@media (max-width: 575px) {
  .portfolio-intro-wrapper {
    max-height: 800px;
  }
}
.portfolio-intro-wrapper.view-more-off {
  max-height: 4em;
}
.view-more-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #fffbf6, #fffbf600);
  z-index: 10;
}
.portfolio-intro {
  display: block;
  margin-bottom: 30px;
}

.portfolio-sub-heading {
  margin: 60px 0 30px 0;
  text-align: center;
}
</style>
