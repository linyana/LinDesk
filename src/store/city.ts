import { defineStore } from 'pinia'

export const cityStore = defineStore('city', {
    state: () => {
        return {
            city: '',
            accessToken: 'city'
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
                key: 'city',
                storage: localStorage,
            }
        ]
    }
})