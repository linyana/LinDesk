// store/use-user-store.ts
import { defineStore } from 'pinia'

export const showStore = defineStore('rightNav', {
    state: () => {
        return {
            isShow: true,
            accessToken: 'rightNav'
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
                key: 'isShow',
                storage: localStorage,
            }
        ]
    }
})