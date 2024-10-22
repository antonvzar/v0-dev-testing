<template>
  <div class="products-page">
    <div class="sidebar">
      <h2>Filters</h2>
      <div class="filter-group">
        <h3>Price</h3>
        <label
          ><input type="checkbox" v-model="filters.price.low" /> $0 - $25</label
        >
        <label
          ><input type="checkbox" v-model="filters.price.medium" /> $25 -
          $50</label
        >
        <label
          ><input type="checkbox" v-model="filters.price.high" /> $50+</label
        >
      </div>
      <div class="filter-group">
        <h3>Brand</h3>
        <label v-for="brand in brands" :key="brand">
          <input type="checkbox" v-model="filters.brands" :value="brand" />
          {{ brand }}
        </label>
      </div>
      <h2>Sort</h2>
      <select v-model="sortBy">
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
    <div class="product-grid">
      <div
        v-for="product in filteredAndSortedProducts"
        :key="product.id"
        class="product-item"
      >
        <div class="product-image"></div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.brand }}</p>
        <p>${{ product.price.toFixed(2) }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart_list'

const cartStore = useCartStore()

const products = ref([
  { id: 1, name: 'Moisturizer', brand: 'SkinCare', price: 19.99 },
  { id: 2, name: 'Sunscreen', brand: 'SunProtect', price: 24.99 },
  { id: 3, name: 'Cleanser', brand: 'CleanSkin', price: 14.99 },
  { id: 4, name: 'Serum', brand: 'GlowUp', price: 39.99 },
  { id: 5, name: 'Face Mask', brand: 'PureMask', price: 9.99 },
  // Add more products as needed
])

const brands = computed(() => [...new Set(products.value.map(p => p.brand))])

const filters = ref({
  price: { low: false, medium: false, high: false },
  brands: [],
})

const sortBy = ref('price-asc')

const filteredAndSortedProducts = computed(() => {
  let result = products.value

  // Apply price filter
  if (
    filters.value.price.low ||
    filters.value.price.medium ||
    filters.value.price.high
  ) {
    result = result.filter(
      p =>
        (filters.value.price.low && p.price < 25) ||
        (filters.value.price.medium && p.price >= 25 && p.price < 50) ||
        (filters.value.price.high && p.price >= 50),
    )
  }

  // Apply brand filter
  if (filters.value.brands.length > 0) {
    result = result.filter(p => filters.value.brands.includes(p.brand))
  }

  // Apply sorting
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      result.sort((a, b) => b.name.localeCompare(a.name))
      break
  }

  return result
})

const itemsPerPage = 6
const currentPage = ref(1)

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredAndSortedProducts.value.slice(start, end)
})

const totalPages = computed(() =>
  Math.ceil(filteredAndSortedProducts.value.length / itemsPerPage),
)

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const addToCart = product => {
  cartStore.addItem(product)
}
</script>

<style scoped>
.products-page {
  display: flex;
  padding: 2rem;
}

.sidebar {
  width: 250px;
  padding-right: 2rem;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group label {
  display: block;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  flex-grow: 1;
}

.product-item {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
}

.product-image {
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
}

.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
