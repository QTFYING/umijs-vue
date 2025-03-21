<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
  import { useGlobalStore } from '@/stores/global';
  import { useUserStore } from '@/stores/user';
  import eventBus, { EVENT_TYPE } from '@/utils/eventBus';
  import enUS from 'ant-design-vue/es/locale/en_US';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import { useRouter } from 'umi';

  const user = useUserStore();
  const router = useRouter();
  const global = useGlobalStore();

  const localeObj = {
    enUS: 'en',
    zhCN: 'zh-cn',
  };

  dayjs.locale(localeObj[global.locale]);

  eventBus.on(EVENT_TYPE.LOGOUT, () => {
    router.replace('/login');
    user.clearToken();
  });
</script>
