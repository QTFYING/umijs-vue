<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#001133"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-space style="width: 150px" spacer="|" @click="router.push('/home')">
        <h1>LOGO</h1>
        <h1>国旅运通</h1>
      </el-space>
    </el-menu-item>

    <el-menu-item index="1"> <router-link to="/system">系统管理</router-link> </el-menu-item>
    <el-menu-item index="2"> <router-link to="/user">供应链管理</router-link></el-menu-item>

    <el-sub-menu index="6">
      <template #title>{{ LocaleLang[currentLocale] }}</template>
      <el-menu-item v-for="(item, key) in LocaleLang" :index="key">{{ item }}</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="5">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="squareUrl" />
          <span class="name">{{ user.currentUser?.username }}</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">
              {{ t('account.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { LocaleLang } from '@/constants';
  import { useAppStore } from '@/stores/app';
  import { useServerStore } from '@/stores/server';
  import { useUserStore } from '@/stores/user';
  import eventBus, { EVENT_TYPE } from '@/utils/eventBus';
  import useLocale from '@/utils/useLocale';
  import { useRouter } from 'umi';
  const router = useRouter();

  import { ref } from 'vue';

  const {
    i18n: { t }, // 解构实例用具t 访问语言变量
    currentLocale, //当前国际化
    changeLocale, // 修改国际化
  } = useLocale();

  const user = useUserStore();
  const server = useServerStore();
  const app = useAppStore();

  const logout = async () => {
    const res = await user.logout();
    if (res?.code === '0') {
      eventBus.emit(EVENT_TYPE.LOGOUT, '');
    }
  };

  const activeIndex = ref('1');
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };

  /**
   * 切换语言
   */
  const switchLang = (e) => {
    changeLocale(e.key);
  };
</script>

<style lang="less"></style>
