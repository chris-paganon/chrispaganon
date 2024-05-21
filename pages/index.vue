<template>
  <div>
    <ContentRenderer v-if="data" :content="data">
      <h3>{{ data.title }}</h3>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () =>
  queryContent('/en/portfolio-intro').findOne()
);
</script>
