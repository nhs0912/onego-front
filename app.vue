<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <RouterView></RouterView> -->
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Onego2');
const description = ref('Onego project입니다!!2');
useHead({ title, meta: [{ name: 'description', content: description }] });
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/google.png',
});
</script>
