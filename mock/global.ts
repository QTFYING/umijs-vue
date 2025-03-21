export default () => {
  const routeBaseName = '/pages/bta/web';
  return {
    user: { token: 'xxxx-xxxx-xxxx-xxxx-xxxx', userName: '超级玛丽亚', account: '1980123456789' },
    appName: 'bta-web',
    routeBaseName,
    menus: [
      { id: '1', name: '首页', path: '/home' },
      {
        id: '2',
        name: '系统管理',
        path: '/system',
        children: [
          {
            id: '1166',
            name: '用户管理',
            path: '/system/user',
            link: 'https://opsefcs.qa.tongcaitong.com/pages/system/user',
            children: [],
          },
          {
            id: '1164',
            name: '角色管理',
            path: '/system/roles-mt',
            link: 'https://opsefcs.qa.tongcaitong.com/pages/system/roles-mt',
            children: [],
          },
          {
            id: '1165',
            name: '菜单管理',
            path: '/system/menus-mt',
            link: 'https://opsefcs.qa.tongcaitong.com/pages/system/menus-mt',
            children: [],
          },
          {
            id: '1163',
            name: '数据字典',
            path: '/system/dict',
            link: 'https://opsefcs.qa.tongcaitong.com/pages/system/dict',
            children: [],
          },
          {
            id: '1162',
            name: '日志管理',
            path: '/system/log',
            link: 'https://opsefcs.qa.tongcaitong.com/pages/system/log',
            children: [],
          },
        ],
      },
    ],
  };
};
