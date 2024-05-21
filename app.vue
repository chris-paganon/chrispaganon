<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
</script>
