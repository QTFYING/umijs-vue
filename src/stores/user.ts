import { defineStore } from 'pinia';
import * as loginService from '../services/login';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as any,
    token: sessionStorage.getItem('token'),
    loading: false,
    loginLoading: false,
  }),

  actions: {
    unmountState() {
      this.$patch({});
    },

    /**
     * 退出
     */
    async logout() {
      return await loginService.logout({});
    },

    /**
     * 清除登录信息
     */
    clearToken() {
      this.$patch({
        currentUser: null as any,
        token: null,
      });
      sessionStorage.removeItem('token');
    },

    async login(username, password) {
      this.loginLoading = true;
      const res = await loginService.login({ username, password });
      if (res?.data) {
        const user = res.data;
        sessionStorage.setItem('token', user?.token);
        this.$patch({
          currentUser: user,
          token: user?.token,
        });
      }
      this.loginLoading = false;
    },
  },
});
