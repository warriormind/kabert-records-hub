<template>
  <div class="error-boundary">
    <div v-if="hasError" class="error-content">
      <div class="error-icon">
        <i class="bi bi-exclamation-triangle-fill"></i>
      </div>
      <h3>Oops! Something went wrong</h3>
      <p>{{ errorMessage }}</p>
      <button @click="resetError" class="btn btn-primary">
        <i class="bi bi-arrow-clockwise"></i>
        Try Again
      </button>
      <details v-if="showDetails" class="error-details">
        <summary>Error Details</summary>
        <pre>{{ error.stack }}</pre>
      </details>
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      hasError: false,
      error: null,
      errorMessage: '',
      showDetails: false
    }
  },
  errorCaptured(error, instance, info) {
    this.hasError = true
    this.error = error
    this.errorMessage = error.message || 'An unexpected error occurred'

    // Log error for debugging
    console.error('Error Boundary caught an error:', error)
    console.error('Component instance:', instance)
    console.error('Error info:', info)

    // In production, you might want to send this to an error reporting service
    // this.reportError(error, instance, info)

    return false // Continue error propagation
  },
  methods: {
    resetError() {
      this.hasError = false
      this.error = null
      this.errorMessage = ''
      this.showDetails = false
    },
    toggleDetails() {
      this.showDetails = !this.showDetails
    }
  }
}
</script>

<style scoped>
.error-boundary {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-content {
  text-align: center;
  padding: 2rem;
  max-width: 500px;
}

.error-icon {
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1rem;
}

.error-content h3 {
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.error-content p {
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.error-details {
  margin-top: 2rem;
  text-align: left;
}

.error-details summary {
  cursor: pointer;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
}

.error-details pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #dc3545;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>