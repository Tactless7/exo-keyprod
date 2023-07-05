<script lang="ts">
import {defineComponent} from "vue"
import {useOrdersStore} from "@/stores/orders";
import {mapState} from "pinia";
import {useClientsStore} from "@/stores/clients";

export default defineComponent({
  name: "ListingPage",

  setup() {
    const ordersStore = useOrdersStore();
    const clientsStore = useClientsStore();

    return {ordersStore, clientsStore};
  },

  mounted() {
    this.fetchOrders();
    this.clientsStore.fetchClients();
  },

  data() {
    return {
      search: '',
      clientId: undefined,

    }
  },

  computed: {
    ...mapState(useOrdersStore, ['orders', 'getCurrentOrdersClients']),
    ...mapState(useClientsStore, ['clients']),
  },

  methods: {
    goToDetails(id: number) {
      this.$router.push({path: `/${id}/details`})
    },
    fetchOrders() {
      // TODO: Debounce when input changes
      this.ordersStore.fetchOrders({search: this.search, clientId: this.clientId})
    }
  }
})
</script>

<template>
  <div class="listing-page">
    <h1>Orders List</h1>

    <div class="filters">
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search Client"
          hide-details
          @input="fetchOrders"
      ></v-text-field>
      <v-select
          v-model="clientId"
          label="Select client"
          :items="getCurrentOrdersClients"
          item-title="name"
          item-value="clientId"
          @update:model-value="fetchOrders"
          clearable
      ></v-select>
    </div>

    <v-table fixed-header>
      <thead>
      <tr>
        <th class="text-center">
          Order Id
        </th>
        <th class="text-center">
          Status
        </th>
        <th class="text-center">
          Client
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id" @click="goToDetails(order.id)">
        <td class="text-center">#{{ order.id }}</td>
        <td class="text-center">
          <v-chip>{{ order.status }}</v-chip>
        </td>
        <td class="text-center">{{ order.client?.name }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>

tr {
  cursor: pointer;
}
</style>
