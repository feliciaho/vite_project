import { defineStore } from 'pinia'
// 1.名稱
// 2.屬性參數
export default defineStore('User Store', {
  // data
  state: () => ({
    name: 'felicia',
    wallet: 300,
  }),
  // computed
  getters: {
    getUserName: (state) => {
      return `my name is ${state.name}`
    },
  },
  // methods
  actions: {
    // actions 可以使用this 所以要用傳統函式
    updateName() {
      this.name = 'kevin'
    },
  },
})
