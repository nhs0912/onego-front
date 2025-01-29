<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class='column'>
        <RouterLink to='/'>RouterLink Home</RouterLink>
        <RouterLink to='https://www.google.com'>google</RouterLink>
        <br/>
        <NuxtLink to='/'>RouterLink Home</NuxtLink>
        <NuxtLink to='https://www.google.com'>google</NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import type { NuxtLink } from '#components';

</script>

<script setup lang="ts">

</script>

<style scoped>

</style>