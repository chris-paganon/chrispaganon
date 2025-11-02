<template>
  <main>
    <div>
      <h1>404, this page doesn't exist</h1>
      <NuxtLink :to="localePath({ name: 'index' })" class="button">
        Go back to the home page
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped>
main {
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  margin: 40px auto;
}
</style>
