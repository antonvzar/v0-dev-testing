<template>
  <transition name="dialog-fade">
    <div class="dialog-overlay" @click="$emit('close')">
      <div class="dialog-content" @click.stop>
        <h2>Sign In</h2>
        <form @submit.prevent="signIn">
          <input type="email" v-model="email" placeholder="Email" required />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <div class="social-sign-in">
          <button class="social-button google">Sign in with Google</button>
          <button class="social-button apple">Sign in with Apple</button>
          <button class="social-button telegram">Sign in with Telegram</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const signIn = () => {
  // Implement sign in logic here
  console.log('Signing in with:', email.value, password.value)
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  transition: transform 0.3s;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-secondary);
  color: var(--text-color);
}

button {
  padding: 0.5rem;
  background-color: var(--accent-color);
  color: var(--text-color-inverse);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.social-sign-in {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: var(--text-color-inverse);
}

.google {
  background-color: #4285f4;
}
.apple {
  background-color: #000000;
}
.telegram {
  background-color: #0088cc;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-from .dialog-content,
.dialog-fade-leave-to .dialog-content {
  transform: scale(0.9);
}
</style>
