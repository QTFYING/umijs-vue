import path from 'path';
import { defineConfig } from 'umi';
import routes from '../src/routes';

const isPrd = process.env.NODE_ENV === 'production';

export default defineConfig({
  npmClient: 'pnpm',
  presets: [require.resolve('@umijs/preset-vue')],
  routes,
  title: '国旅运通后台管理系统',
  base: '/',
  publicPath: isPrd ? './' : '/',
  history: { type: 'browser' },
  fastRefresh: true,
  mfsu: false,
  targets: {
    chrome: 80,
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@stores': '/src/stores',
  },
  theme: { '@primary-color': '#2D72E0' },
});
