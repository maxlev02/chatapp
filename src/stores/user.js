import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', () => {
  const user = ref({})
  function increment() {
    user.value++
  }

  return { user, doubleCount, increment }
})
