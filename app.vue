<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <RouterView></RouterView> -->
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Onego');
const description = ref('Onego project입니다!!2');
useHead({ title, meta: [{ name: 'description', content: description }] });
useSeoMeta({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'Onego';
  },
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/google.png',
});
</script>
