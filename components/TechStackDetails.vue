<template>
  <div class="details-meta">
    <p>
      <strong>{{ $t(`TechStack.details.${tech}.name`) }}:</strong>
    </p>
    <p>
      <strong>{{ $t(`TechStack.details.${tech}.time`) }}</strong>
    </p>
  </div>
  <p>{{ $t(`TechStack.details.${tech}.description`) }}</p>
</template>

<script setup lang="ts">
defineProps<{
  tech: string;
}>();
</script>

<style scoped>
.details-meta {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5em;
}
p {
  text-align: left;
  margin-bottom: 0;
}
</style>
