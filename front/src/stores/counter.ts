import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useOrderStore = defineStore('orders', () => {
  const orders = ref([])

  const fetchOrders = () => {
    orders.value = []
  }

  return {orders, fetchOrders}
})
