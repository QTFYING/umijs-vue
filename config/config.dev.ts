
export default {
  define: {
      "process.env.apiUrl": "http://127.0.0.1:8000/cits/osp",
  },
  chainWebpack: config => { // 解决i18n在控制台的警告信息
      config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
  }
}