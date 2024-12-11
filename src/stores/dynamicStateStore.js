import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        str: 0,
        con: 0,
        int: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },

    // 定义方法
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
});