<template>
  <div class="skin-analysis">
    <h1>Skin Analysis</h1>
    <div class="upload-section">
      <button @click="openFileDialog" class="upload-button">
        Upload your photo to analyze your skin
      </button>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        accept="image/*"
        style="display: none"
      />
    </div>
    <div v-if="isProcessing" class="processing-indicator">Processing...</div>
    <div v-if="analysisResult" class="analysis-result">
      <h2>Analysis Result</h2>
      <p>{{ analysisResult }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const isProcessing = ref(false)
const analysisResult = ref(null)

const openFileDialog = () => {
  fileInput.value.click()
}

const handleFileUpload = async event => {
  const file = event.target.files[0]
  if (file) {
    isProcessing.value = true
    try {
      // Simulating API call for skin analysis
      await new Promise(resolve => setTimeout(resolve, 3000))
      analysisResult.value =
        'Your skin appears to be in good condition. We recommend maintaining your current skincare routine.'
    } catch (error) {
      console.error('Error analyzing skin:', error)
      analysisResult.value =
        'An error occurred during analysis. Please try again.'
    } finally {
      isProcessing.value = false
    }
  }
}
</script>

<style scoped>
.skin-analysis {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

h1 {
  color: var(--text-color);
  margin-bottom: 2rem;
}

.upload-section {
  margin-bottom: 2rem;
}

.upload-button {
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
}

.upload-button:hover {
  background-color: var(--bg-hover);
  transform: scale(1.05);
}

.processing-indicator {
  color: var(--text-color);
  font-size: 1.2rem;
  margin-top: 1rem;
}

.analysis-result {
  margin-top: 2rem;
  text-align: center;
}

.analysis-result h2 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.analysis-result p {
  color: var(--text-color);
  max-width: 600px;
}
</style>
