<template>
  <div class="home-page">
    <h1>Welcome to SkinAI</h1>
    <p>
      Our advanced AI model analyzes your skin condition with high accuracy.
    </p>
    <p>
      Using state-of-the-art deep learning techniques, we can detect various
      skin issues and provide personalized recommendations.
    </p>
    <router-link to="/analysis" class="check-skin-button">
      Check your skin condition
    </router-link>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
}

h1 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

p {
  color: var(--text-color);
  max-width: 600px;
  margin-bottom: 1rem;
}

.check-skin-button {
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--text-color-inverse);
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s ease;
  text-decoration: none;
}

.check-skin-button:hover {
  background-color: var(--bg-hover);
  transform: scale(1.05);
}
</style>
