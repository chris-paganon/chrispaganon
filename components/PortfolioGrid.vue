<template>
  <div class="portfolio-wrapper">
    <NuxtLink
      v-for="project in portfolio"
      :key="project.id"
      ref="portfolioCards"
      class="portfolio-card"
      :to="localePath({ name: 'project-slug', params: { slug: project.slug } })"
    >
      <img :src="project.image" :alt="project.imageAlt" />
      <div class="portfolio-card-text-wrapper">
        <h3>{{ project.Title }}</h3>
        <p>{{ project.Description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { data: portfolio } = await useAsyncData('portfolio', () =>
  queryContent(nuxtApp.$i18n.locale.value, 'project').find()
);

const portfolioCards = ref(null);
onMounted(() => {
  window.addEventListener('scroll', function () {
    portfolioCards.value.forEach(function (portfolioCard) {
      const position = portfolioCard.$el.getBoundingClientRect();
      const centerBoxHeight =
        Math.min(2 * position.height, window.innerHeight) - 5;
      const distToCenterBox = (window.innerHeight - centerBoxHeight) / 2;

      if (
        position.top > distToCenterBox &&
        position.bottom < window.innerHeight - distToCenterBox
      ) {
        portfolioCard.$el.classList.add('viewportVisible');
      } else {
        portfolioCard.$el.classList.remove('viewportVisible');
      }
    });
  });
});
</script>

<style scoped>
.portfolio-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 35px;
}
img {
  width: 100%;
  border-radius: 10px;
}

.portfolio-card {
  position: relative;
  width: 48%;
  margin: 20px 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  transition: transform 1s;
}
@media (pointer: fine) {
  .portfolio-card:hover {
    transform: scale(1.02, 1.02);
  }
  .portfolio-card:hover .portfolio-card-text-wrapper {
    visibility: visible;
    transform: translateY(0);
  }
}
@media (pointer: coarse) {
  .portfolio-card.viewportVisible {
    transform: scale(1.02, 1.02);
  }
  .portfolio-card.viewportVisible .portfolio-card-text-wrapper {
    visibility: visible;
    transform: translateY(0);
  }
}
.portfolio-card:first-child {
  width: 100%;
}

.portfolio-card-text-wrapper {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  transform: translateY(100%);
  transition:
    transform 750ms ease-out,
    visibility 750ms ease-out;
}

@media (max-width: 850px) {
  .portfolio-card {
    width: 100%;
  }
}
</style>
