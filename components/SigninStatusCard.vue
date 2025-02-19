<template>
  <div class="q-pa-xs">
    <q-btn-dropdown
      class="q-pa-sm"
      style="color: rgb(96, 88, 76); background: rgb(255, 204, 80)"
      :label="accountName"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-sm q-mb-xs">{{ accountName }}</div>
          <div class="text-subtitle2 q-mt-xs q-mb-xs">{{ account }}</div>

          <q-btn
            v-close-popup
            color="primary"
            :label="t('logout')"
            push
            size="md"
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import type i18n from '~/plugins/i18n';
const { t } = useI18n();
defineProps<{
  accountName: string | undefined;
  account: string | undefined;
}>();

const mobileData = ref(false);
const bluetooth = ref(false);
</script>
