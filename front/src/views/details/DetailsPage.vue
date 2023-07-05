<script lang="ts">
import {useOrdersStore} from "@/stores/orders";
import {defineComponent} from "vue";
import {mapState} from "pinia";

export default defineComponent({
  name: 'DetailsPage',

  setup() {
    const ordersStore = useOrdersStore();

    return {ordersStore};
  },

  mounted() {
    const id = this.$route.params.id
    if (id) this.ordersStore.fetchOrder(+id)
  },

  computed: {
    ...mapState(useOrdersStore, ['currentOrder']),
  },
  methods: {
    getProduct(reference: string) {
  
    },
  }
})

</script>

<template>
  <div class="details-page">
    <h1> Order Details</h1>
    <div class="container">

      <div v-if="currentOrder" class="sidebar">
        <p>Order #{{ currentOrder.id }}</p>
        <p>
          <v-chip>
            {{ currentOrder.status }}
          </v-chip>
        </p>

        <div class="client">
          <p>{{ currentOrder.client?.name }}</p>
          <p>{{ currentOrder.client?.address_1 }}</p>
          <p v-if="currentOrder.client?.address_2">{{ currentOrder.client?.address_2 }}</p>
          <p>{{ currentOrder.client?.zip_code }} {{ currentOrder.client?.city }}</p>
          <p>{{ currentOrder.client?.country }}</p>
        </div>
      </div>
      <v-divider vertical></v-divider>
      <div class="product-list">
        <h2>Product list</h2>

        <v-table v-if="currentOrder" fixed-header>
          <thead>
          <tr>
            <th class="text-center">
              Reference
            </th>
            <th class="text-center">
              Product
            </th>
            <th class="text-center">
              Version
            </th>
            <th class="text-center">
              Weight
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="product in currentOrder.products" :key="product.id">
            <td class="text-center">#{{ product.reference }}</td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center">
              <v-btn>Scan</v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.container > div {
  margin: 30px;
}

h1, h2 {
  text-align: center;
  margin: 20px 0;
}
</style>
