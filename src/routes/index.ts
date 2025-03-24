export default [
  {
    path: '/login',
    component: 'login',
  },
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/wrappers/index'],
    routes: [
      { path: '/home', component: 'home' },
      { path: '/user', component: 'user' },
      {
        path: '/system',
        routes: [
          { name: 'user-mt', path: '/system/user', component: 'system/user' },
          { name: 'user-mt-detail', path: '/system/user:userId', component: 'system/user-detail' },
          { name: 'role-mt', path: '/system/role', component: 'system/roles' },
        ],
      },
      { path: '/', redirect: '/home' },
      { path: '/:catchAll(.*)', component: '404.vue' },
    ],
  },
];
