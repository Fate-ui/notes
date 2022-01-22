import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homeStore', {
  state() {
    return {
      name: 'ween'
    }
  }
})
