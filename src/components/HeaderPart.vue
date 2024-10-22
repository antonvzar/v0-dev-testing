<template>
  <header>
    <div class="header-content">
      <div class="left-section">
        <div
          class="menu-container"
          @mouseover="showMenu = true"
          @mouseleave="showMenu = false"
        >
          <button class="menu-button">Menu</button>
          <transition name="slide-fade">
            <div v-if="showMenu" class="menu-popup">
              <router-link
                to="/"
                class="menu-item"
                :class="{ active: $route.path === '/' }"
                @click="showMenu = false"
                >Home</router-link
              >
              <router-link
                to="/about"
                class="menu-item"
                :class="{ active: $route.path === '/about' }"
                @click="showMenu = false"
                >About Us</router-link
              >
              <router-link
                to="/products"
                class="menu-item"
                :class="{ active: $route.path === '/products' }"
                @click="showMenu = false"
                >Products</router-link
              >
            </div>
          </transition>
        </div>
        <router-link to="/" class="company-name">SkinAI</router-link>
      </div>
      <div class="right-section">
        <button @click="openSignInDialog" class="auth-button">Sign In</button>
        <button @click="openSignUpDialog" class="auth-button">Sign Up</button>
        <ShoppingCart />
      </div>
    </div>
    <SignInDialog v-if="showSignInDialog" @close="closeSignInDialog" />
    <SignUpDialog v-if="showSignUpDialog" @close="closeSignUpDialog" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ShoppingCart from './ShoppingCart.vue'
import SignInDialog from './SignInDialog.vue'
import SignUpDialog from './SignUpDialog.vue'

const showMenu = ref(false)
const showSignInDialog = ref(false)
const showSignUpDialog = ref(false)
const route = useRoute()

const openSignInDialog = () => {
  showSignInDialog.value = true
}

const closeSignInDialog = () => {
  showSignInDialog.value = false
}

const openSignUpDialog = () => {
  showSignUpDialog.value = true
}

const closeSignUpDialog = () => {
  showSignUpDialog.value = false
}
</script>

<style scoped>
header {
  background-color: var(--bg-secondary);
  padding: 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section,
.right-section {
  display: flex;
  align-items: center;
}

.company-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  margin-left: 1rem;
}

.menu-container {
  position: relative;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--text-color);
}

.menu-popup {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--bg-secondary);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.menu-item {
  padding: 0.5rem;
  text-decoration: none;
  color: var(--text-color);
  white-space: nowrap;
}

.menu-item:hover,
.menu-item.active {
  background-color: var(--bg-hover);
  color: var(--text-color-inverse);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.auth-button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: var(--text-color-inverse);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth-button:hover {
  background-color: var(--bg-hover);
}
</style>
