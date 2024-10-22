<template>
  <div id="app">
    <HeaderPart />
    <router-view></router-view>
    <FooterPart />
  </div>
</template>

<script setup>
import HeaderPart from './components/HeaderPart.vue'
import FooterPart from './components/FooterPart.vue'
</script>

<style>
:root {
  --bg-primary: #f0e6fa;
  --bg-secondary: #d8b4fe;
  --bg-hover: #c084fc;
  --text-color: #4c1d95;
  --text-color-inverse: #f5f3ff;
  --accent-color: #7c3aed;
  --border-color: #a78bfa;
  --danger-color: #ef4444;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-color);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
