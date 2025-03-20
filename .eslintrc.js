module.exports = {
  // extends: require.resolve('umi/eslint'),
  parser: '@typescript-eslint/parser',
  ecmaVersion: 2020,
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  plugins: ['vue'],
  rules: {
    // 禁止在代码中使用 console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 强制组件名称为多单词
    'vue/multi-word-component-names': 'error',
    // 不允许在模板中使用 v-html，以防止 XSS 攻击
    'vue/no-v-html': 'error',
    // 设置 <script> 标签内容缩进为2个空格
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
  },

  // 设置哪些文件或目录应该被忽略
  ignorePatterns: ['node_modules/', 'dist/', '.eslint.js'],

  // 设置全局变量，这样 ESLint 就不会报错说这些变量未定义
  globals: {
    jQuery: 'readonly',
  },
};
