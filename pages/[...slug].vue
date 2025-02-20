<template>
  <div>
    ...slug page
    {{ route.params.slug }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
