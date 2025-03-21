import mockjs from 'mockjs';

export default {
  // 登录
  'POST /cits/osp/login': {
    code: '200',
    message: '登录成功',
    data: {
      username: '10000000000',
      role: 'ROLE_SUPER_ADMIN',
      token: 'xxxxxxxxxxxxx',
    },
  },

  // 退出
  'GET /cits/osp/logout': {
    code: '200',
    message: '登录成功',
    data: null,
  },

  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
