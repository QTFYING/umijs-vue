import { defaultLang } from '@/constants'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
	state: () => ({
		selectedKeys: ['/home'], // 菜单展开
		locale: localStorage.getItem('locale') || defaultLang
	}),

	actions: {
		setSelectedKeys(key) {
			this.selectedKeys[0] = key
		},

		changeLocale(value) {
			this.locale = value
		}
	},
})
