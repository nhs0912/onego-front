<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageTitle :title="t('login')"></PageTitle>
      <div class='text-subtitle1 q-mb-xl q-mt-lg'>{{ t('hello') }} :) </div>
      <FormLogin style="width: 400px" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>