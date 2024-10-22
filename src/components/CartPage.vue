<template>
  <div class="cart-page">
    <h1>Your Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="item-in-cart">
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price.toFixed(2) }}</p>
        </div>
        <div class="item-actions">
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
          <button @click="removeFromCart(item)" class="delete-item">
            Delete item
          </button>
        </div>
      </div>
      <div class="cart-total">
        <h2>Total: ${{ cartTotal.toFixed(2) }}</h2>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart_list'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const cartTotal = computed(() => cartStore.totalPrice)

const increaseQuantity = item => {
  cartStore.updateQuantity(item, item.quantity + 1)
}

const decreaseQuantity = item => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item, item.quantity - 1)
  } else {
    removeFromCart(item)
  }
}

const removeFromCart = item => {
  cartStore.removeItem(item)
}
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.item-in-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--bg-secondary);
}

.item-details {
  flex-grow: 1;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.delete-item {
  background-color: var(--danger-color);
  color: var(--text-color-inverse);
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.cart-total {
  text-align: right;
  margin-top: 2rem;
}
</style>
