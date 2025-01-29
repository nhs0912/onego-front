<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>OneGo Project</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{navigate}" custom to="/">
          <q-btn stretch flat label="Home" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat label="About" no-caps @click="navigate" />
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/course">
          <q-btn stretch flat label="Course" no-caps @click="navigate" />
        </NuxtLink>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));
</script>