import { defineStore } from "pinia";

export const themeStore = defineStore('theme', {
    state: () => {
        return {
            theme: '',
            accessToken: 'theme'
        }
    },
    actions: {
        setToken(value: string) {
            this.accessToken = value
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'theme',
                storage: localStorage,
            },
        ]
    }
})