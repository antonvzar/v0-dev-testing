<template>
  <div class="shopping-cart">
    <div
      class="cart-icon"
      @mouseover="showPopover = true"
      @mouseleave="showPopover = false"
    >
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">{{ cartItemCount }}</span>
      </router-link>
    </div>
    <transition name="fade">
      <div v-if="showPopover" class="cart-popover">
        <h3>Shopping Cart</h3>
        <div v-if="cartItems.length > 0">
          <div
            v-for="item in cartItems.slice(0, 4)"
            :key="item.id"
            class="cart-item"
          >
            <span>{{ item.name }}</span>
            <span>Quantity: {{ item.quantity }}</span>
            <button @click="removeFromCart(item)">Remove</button>
          </div>
          <router-link to="/cart" class="view-cart-button"
            >View Full Cart</router-link
          >
        </div>
        <div v-else>Your cart is empty</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart_list'

const cartStore = useCartStore()
const showPopover = ref(false)

const cartItems = computed(() => cartStore.items)
const cartItemCount = computed(() => cartStore.itemCount)

const removeFromCart = item => {
  cartStore.removeItem(item)
}
</script>

<style scoped>
.shopping-cart {
  position: relative;
}

.cart-icon {
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-color);
}

.cart-icon a {
  text-decoration: none;
  color: inherit;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--accent-color);
  color: var(--text-color-inverse);
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
}

.cart-popover {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1rem;
  width: 250px;
  z-index: 1000;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.view-cart-button {
  display: block;
  text-align: center;
  background-color: var(--accent-color);
  color: var(--text-color-inverse);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
