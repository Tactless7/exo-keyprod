import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Listing',
      component: () => import('@/views/listing/ListingPage.vue')
    },
    {
      path: '/:id/details',
      name: 'Details',
      component: () => import('@/views/details/DetailsPage.vue')
    }
  ]
})

export default router
