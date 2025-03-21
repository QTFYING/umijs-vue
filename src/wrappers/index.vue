<template>
  <BasicLayout>
    <router-view></router-view>
  </BasicLayout>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/stores/user';
  import { useRouter } from 'umi';
  import BasicLayout from '../components/basic_layout.vue';

  const user = useUserStore();
  const router = useRouter();

  if (!user.currentUser) {
    if (user.token) {
      user.getManagerInfo();
    } else {
      router.replace('/login');
    }
  }
</script>
