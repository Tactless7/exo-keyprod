import {defineStore} from 'pinia'
import {axios} from "@/libs/axios";
import {type Client} from "@/types/Client";

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [] as Client[],
  }),

  actions: {
    async fetchClients() {
      try {
        const res = await axios.get<Client[]>('/clients')
        this.clients = res.data;
      } catch (e) {
        console.error('Error fetching clients');
      }
    },
  },
})
