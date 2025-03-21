<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">
      <img src="../assets/yay.jpg" width="50" class="logo" alt="Element logo" />
    </el-menu-item>

    <el-menu-item index="1"> <router-link to="/game">企业管理</router-link> </el-menu-item>
    <el-menu-item index="2"> <router-link to="/user">供应链管理</router-link></el-menu-item>
    <el-menu-item index="3">财务管理</el-menu-item>
    <el-menu-item index="4">支付管理</el-menu-item>

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
  import { useGameStore } from '@/stores/game';
  import { useServerStore } from '@/stores/server';
  import { useUserStore } from '@/stores/user';
  import eventBus, { EVENT_TYPE } from '@/utils/eventBus';
  import useLocale from '@/utils/useLocale';
  import { LogoutOutlined, SearchOutlined } from '@ant-design/icons-vue';

  import { ref } from 'vue';

  const {
    i18n: { t }, // 解构实例用具t 访问语言变量
    currentLocale, //当前国际化
    changeLocale, // 修改国际化
  } = useLocale();

  const user = useUserStore();
  const game = useGameStore();
  const server = useServerStore();
  const app = useAppStore();

  const logout = async () => {
    const res = await user.logout();
    if (res?.code === '0') {
      eventBus.emit(EVENT_TYPE.LOGOUT, '');
    }
  };

  game.findGamesByManager();

  const activeIndex = ref('1');
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };

  /**
   * 切换游戏
   * @param e
   */
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const gameId = `${e.key}`;
    game.onChangeGame(gameId);

    // 当前页面为包管理与区服管理页面时重新请求数据
    const href = window.location.href;

    if (href.includes('app')) {
      server.findListByGameId(gameId);

      app.unmountState();

      eventBus.emit(EVENT_TYPE.APP_LIST_CHANGE_BY_GAME, gameId);
    }
    if (href.includes('server')) {
      server.findList(1, 10, gameId);
    }
  };

  const searchValue = ref<string>('');

  const onSearch = () => {
    console.log('use value', searchValue.value);
  };

  /**
   * 切换语言
   */
  const switchLang = (e) => {
    changeLocale(e.key);
  };
</script>

<style lang="less"></style>
