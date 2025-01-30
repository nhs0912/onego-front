<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        <q-toolbar-title>OneGo</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat :label="t('home')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat :label="t('about')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/course">
          <q-btn stretch flat :label="t('course')" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn stretch flat :label="t('youtube')" no-caps @click="moveYoutube()" />
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat :label="t('admin')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/custom">
          <q-btn stretch flat :label="t('custom')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="selectedLanguageName">
          <q-list padding dense>
            <q-item v-for="{ code, name } in languages" :key="code" v-close-popup clickable
              :active="code === $i18n.locale" @click="$i18n.locale = code">
              <q-item-section>
                <q-item-label>{{ name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <!-- <q-btn v-if=isAuthenticated class='bg-grey text-white'>{{ authUser?.email }}</q-btn> -->
        <SigninStatusCard v-if=isAuthenticated :account="authUser?.email"></SigninStatusCard>
        <q-separator dark vertical />
        <q-btn flat round dense icon="search" />

        <NuxtLink v-if=!isAuthenticated v-slot="{ navigate }" custom to="/login">
          <q-btn stretch flat :label="t('login')" no-caps @click="navigate()" />
        </NuxtLink>
        <!-- <q-btn v-else class='bg-grey text-white'>{{ authUser }}</q-btn> -->
        <q-btn v-else stretch flat :label="t('logout')" no-caps @click="signOut()" />

      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <q-banner v-if=isAuthenticated class='bg-primary text-white'>
        {{ authUser }}
      </q-banner>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const { authUser, isAuthenticated } = useAuthUser();
const { signOut } = useAuth();

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));
// import { useI18n } from 'vue-i18n';

const moveYoutube = async () => {
  await navigateTo(
    'https://youtube.com', {
    external: true,
    open: { target: '_blank' },
  }
  )
};

interface Language {
  name: string;
  code: 'en' | 'ko';
}

const languages = ref<Language[]>([
  { name: 'English', code: 'en' },
  { name: '한국어', code: 'ko' },
]);

const { locale, t } = useI18n();

const selectedLanguageName = computed(
  () => languages.value.find((lang) => lang.code === locale.value)?.name,
);
</script>