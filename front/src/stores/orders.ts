import {defineStore} from 'pinia'
import {axios} from "@/libs/axios";
import {type Order} from "@/types/Order";

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [] as Order[],
    currentOrder: null as Order | null
  }),

  getters: {
    getCurrentOrdersClients: (state) => {
      return state.orders.map((order: Order) => ({
        name: order.client?.name,
        clientId: order.client_id
      })).filter((client: { name?: string, clientId?: number }) => !!client.name)
    }
  },

  actions: {
    async fetchOrders({clientId, search, status}: {
      clientId?: number,
      search?: string,
      status?: string
    }) {
      try {
        const res = await axios.get<Order[]>('/orders', {
          params: {
            ...(clientId && {clientId}),
            ...(search && {clientSearch: search}),
            ...(status && {status})
          }
        })
        this.orders = res.data;
      } catch (e) {
        console.error('Error fetching orders');
      }
    },
    async fetchOrder(id: number) {
      try {
        const res = await axios.get<Order>(`/orders/${id}`)
        this.currentOrder = res.data;
      } catch (e) {
        console.error(`Error Fetching order #${id}`);
      }
    }
  },
})
