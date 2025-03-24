<template>
  <el-container>
    <el-header style="background-color: #001133">
      <PageHeader />
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item index="1">
            <span>{{ t('menu.home') }}</span>
          </el-menu-item>

          <el-menu-item index="2">
            <span>{{ t('menu.monitor') }}</span>
          </el-menu-item>

          <el-menu-item index="3">
            <span>{{ t('menu.app') }}</span>
          </el-menu-item>

          <el-menu-item index="4">
            <span>{{ t('menu.server') }} </span>
          </el-menu-item>

          <el-menu-item index="5">
            <span>{{ t('menu.billingPoint') }}</span>
          </el-menu-item>

          <el-menu-item index="6">
            <span>{{ t('menu.agent') }}</span>
          </el-menu-item>

          <el-menu-item index="7">
            <span>{{ t('menu.service') }}</span>
          </el-menu-item>

          <el-menu-item index="8" v-if="!!user.currentUser && user.currentUser?.role === 'ROLE_SUPER_ADMIN'">
            <span>{{ t('menu.game') }}</span>
          </el-menu-item>

          <el-menu-item index="9" v-if="!!user.currentUser && user.currentUser?.role === 'ROLE_SUPER_ADMIN'">
            <span>{{ t('menu.user') }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import { useGlobalStore } from '@/stores/global';
  import { useUserStore } from '@/stores/user';
  import useLocale from '@/utils/useLocale';
  import type { MenuProps } from 'ant-design-vue';
  import { useRouter } from 'umi';
  import { ref } from 'vue';
  import PageHeader from './page_header.vue';

  const {
    i18n: { t },
  } = useLocale();

  const global = useGlobalStore();
  const router = useRouter();
  let collapsed = ref<boolean>(false);

  const user = useUserStore();

  const handleClick: MenuProps['onClick'] = (e) => {
    router.push(`13213`);
  };
</script>

<style lang="less"></style>
