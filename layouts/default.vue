<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-toolbar-title>{{ appConfig.title }} </q-toolbar-title>
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
        <q-btn
          stretch
          flat
          :label="t('youtube')"
          no-caps
          @click="moveYoutube()"
        />
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat :label="t('admin')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/custom">
          <q-btn
            stretch
            flat
            :label="t('custom')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="currentLocaleLabel">
          <q-list padding dense>
            <q-item v-close-popup clickable :to="localePath('/', 'en')">
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable :to="switchLocalPath('ko')">
              <q-item-section>
                <q-item-label>한국어</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <!-- <q-btn v-if=isAuthenticated class='bg-grey text-white'>{{ authUser?.email }}</q-btn> -->
        <!-- <ClientOnly> -->
        <SigninStatusCard
          v-if="isAuthenticated"
          :account-name="authUser?.name"
          :account="authUser?.email"
        />
        <q-separator dark vertical />
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn stretch flat :label="t('login')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-btn
          v-else
          stretch
          flat
          :label="t('logout')"
          no-caps
          @click="signOut()"
        />
        <!-- </ClientOnly> -->
        <q-btn flat round dense icon="search" />
        <!-- <q-btn v-else class='bg-grey text-white'>{{ authUser }}</q-btn> -->
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <!-- <ClientOnly> -->
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">
        {{ authUser }}
        isAuthenticated = {{ isAuthenticated }}
      </q-banner>
      <!-- </ClientOnly> -->
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
// const { signOut } = useAuth();
const authStore = useAuthStore();
const { user: authUser, isAuthenticated } = storeToRefs(authStore);
const { signOut } = authStore;
const { locale, t } = useI18n();
const localePath = useLocalePath();
const switchLocalPath = useSwitchLocalePath();

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
  await navigateTo('https://youtube.com', {
    external: true,
    open: { target: '_blank' },
  });
};

// interface Language {
//   name: string;
//   code: 'en' | 'ko';
// }

// const languages = ref<Language[]>([
//   { name: 'English', code: 'en' },
//   { name: '한국어', code: 'ko' },
// ]);

// const { locale, t } = useI18n();

// const selectedLanguageName = computed(
//   () => languages.value.find((lang) => lang.code === locale.value)?.name,
// );

// watch(locale, (val) => (useCookie('locale').value = val));

// const $t = (str: string) => str;

const currentLocaleLabel = computed(() => {
  // 현재 로케일에 따라 라벨을 반환합니다.
  switch (locale.value) {
    case 'en':
      return 'English';
    case 'ko':
      return '한국어';
    // 다른 로케일이 있다면 case 문을 추가합니다.
    default:
      return 'Language'; // 기본 라벨
  }
});

const appConfig = useAppConfig();
console.log('appConfig : ', appConfig);
</script>
