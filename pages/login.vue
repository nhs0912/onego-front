<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageTitle :title="t('login')" />
      <div class="text-subtitle1 q-mb-xl q-mt-lg">{{ t('hello') }} :)</div>
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  middleware: ['guest-only'],
});
const handleLoginSuccess = async () => {
  const { isAdmin } = storeToRefs(useAuthStore());
  // const isAdmin = useAdmin();
  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>
