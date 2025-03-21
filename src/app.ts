import ElementPlus, { ElNotification } from 'element-plus';
import { createPinia } from 'pinia';
import { i18n } from './i18n';
import { useGlobalStore } from './stores/global';

/**
 * createApp
 * 这个方法官网上查不到，但是是官方为了兼容vue改造的createApp方法
 * 示例：https://github.com/umijs/umi/blob/master/examples/with-vue-element-plus/app.tsx
 * @param params 参数对象，包含一个 `app` 属性，用于配置 Vue 应用程序。
 */

const notificationInstance = ElNotification({
  // 你可以在这里设置全局配置，如位置、持续时间等
  position: 'top-right',
  duration: 5000,
});

// 将实例存储在 Vue 的原型上
export async function onAppCreated({ app }: any) {
  // 注册全局实例 - notify
  app.config.globalProperties.$notify = notificationInstance;

  app.use(createPinia());
  app.use(i18n);
  app.use(ElementPlus);
}

export async function onMounted({ app, router }: any) {
  console.log('onMounted', app, router);

  window.GLOBAL = { user: { userName: '123', userId: '1312' }, menus: [] };

  // 路由拦截
  router.beforeEach((to: any, from: any, next: () => void) => {
    const global = useGlobalStore();
    global.setSelectedKeys(to.path);
    // console.log('router beforeEach', to, from);
    next();
  });
}

let extraRoutes: any[] = [];

// 获取routes数据
export const render = (oldRender) => {
  Promise.resolve().then((res: any) => {
    extraRoutes = [
      {
        path: '/home',
        name: 'home',
        component: '@/pages/home',
      },
    ];
    console.log('=====routes======', extraRoutes);
    oldRender();
  });
};
