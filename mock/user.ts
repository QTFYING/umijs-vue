import mockjs from 'mockjs';

export default {
  // 登录接口返回数据格式
  'POST /cits/osp/login': {
    code: '200',
    message: '登录成功',
    data: {
      username: '10000000000',
      role: 'ROLE_SUPER_ADMIN',
      token: 'xxxxxxxxxxxxx',
    },
  },

  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
