export default [
  {
    path: '/login',
    name: 'login',
    component: '@/pages/login',
  },
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/wrappers/index'],
    routes: [
      { path: '/home', component: '@/pages/home' },
      { path: '/game', component: '@/pages/game' },
      { path: '/user', component: '@/pages/user' },
      { path: '/', redirect: '/home' },
      { path: '/:catchAll(.*)', component: '@/pages/404.vue' },
    ],
  },
];
