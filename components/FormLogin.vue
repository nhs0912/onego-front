<template>
  <q-form class="q-gutter-lg" @submit.prevent="handleLoginSubmit">
    <q-input v-model="form.email" filled :label="t('email')"/>

    <q-input v-model="form.passwowrd" filled type="password" :label="t('password')"/>
    <div v-if='error' class='text-red text-center'>{{ error.message }}</div>
    <div class="q-mt-lg">
      <q-btn class="full-width" :label="t('login')" type="submit" size="lg" color="primary" no-caps
             :loading="loading"/>
    </div>
  </q-form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  success: [];
}>();

// const { signIn } = useAuth();
const {signIn} = useAuthStore();
// const emit = defineEmits(['success']);
const {t} = useI18n();
const form = ref({
  email: '',
  passwowrd: '',
});
const error = ref<Error | null>(null);
const loading = ref(false);

const handleLoginSubmit = () => {
  try {
    error.value = null;
    loading.value = true;
    // login business logic
    signIn(form.value.email, form.value.passwowrd);

    emit('success');
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
    } else {
      throw Error;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>