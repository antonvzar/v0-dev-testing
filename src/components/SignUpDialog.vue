<template>
  <transition name="dialog-fade">
    <div class="dialog-overlay" @click="$emit('close')">
      <div class="dialog-content" @click.stop>
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp">
          <input type="email" v-model="email" placeholder="Email" required />
          <button type="submit">Sign Up</button>
        </form>
        <div class="social-sign-up">
          <button class="social-button google">Sign up with Google</button>
          <button class="social-button apple">Sign up with Apple</button>
          <button class="social-button telegram">Sign up with Telegram</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const signUp = () => {
  // Implement sign up logic here
  console.log('Signing up with:', email.value)
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

.social-sign-up {
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
