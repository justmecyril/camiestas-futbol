import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import productDescription from '../views/productDescription.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-description/:productId',
    name: 'ProductDescription',
    component: productDescription
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
