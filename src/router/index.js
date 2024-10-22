import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ShoppingCart from '../components/CartPage.vue'
import AboutUs from '../components/AboutUs.vue'
import ProductsPage from '../components/ProductsPage.vue'
import SkinAnalysis from '../components/SkinAnalysis.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: ShoppingCart },
  { path: '/about', component: AboutUs },
  { path: '/products', component: ProductsPage },
  { path: '/analysis', component: SkinAnalysis },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
