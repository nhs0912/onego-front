<template>
  <div class="q-pa-md">
    <q-btn-dropdown class="" color="grey" :label=account>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn color="primary" :label="t('logout')" push size="md" v-close-popup />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import type i18n from '~/plugins/i18n';
const { t } = useI18n();
defineProps<{ account: string | undefined }>();

const mobileData = ref(false);
const bluetooth = ref(false);

</script>
