<template>
  <div class="lazy-image-container" :class="{ 'loaded': isLoaded, 'error': hasError }">
    <img
      v-if="isLoaded && !hasError"
      :src="src"
      :alt="alt"
      :class="imgClass"
      :style="imgStyle"
      @load="onLoad"
      @error="onError"
    />
    <SkeletonLoader
      v-else-if="!hasError"
      type="image"
      :width="width"
      :height="height"
      :rounded="rounded"
    />
    <div v-if="hasError" class="error-placeholder" :style="{ width: width, height: height }">
      <i class="bi bi-image"></i>
      <span>Image unavailable</span>
    </div>

    <!-- Intersection Observer Target -->
    <div ref="observerTarget" class="observer-target"></div>
  </div>
</template>

<script>
import SkeletonLoader from './SkeletonLoader.vue'

export default {
  name: 'LazyImage',
  components: {
    SkeletonLoader
  },
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    imgClass: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    rootMargin: {
      type: String,
      default: '50px'
    },
    threshold: {
      type: Number,
      default: 0.1
    }
  },
  data() {
    return {
      isLoaded: false,
      hasError: false,
      isIntersecting: false,
      observer: null
    }
  },
  computed: {
    imgStyle() {
      return {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height
      }
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isLoaded && !this.hasError) {
            this.isIntersecting = true
            this.loadImage()
            this.observer.unobserve(entry.target)
          }
        })
      }, options)

      if (this.$refs.observerTarget) {
        this.observer.observe(this.$refs.observerTarget)
      }
    },
    loadImage() {
      const img = new Image()
      img.onload = () => {
        this.isLoaded = true
        this.$emit('load', this.src)
      }
      img.onerror = () => {
        this.hasError = true
        this.$emit('error', this.src)
      }
      img.src = this.src
    },
    onLoad() {
      // Image loaded successfully
    },
    onError() {
      this.hasError = true
    }
  }
}
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
}

.lazy-image-container.loaded img {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.error-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  color: #6c757d;
  font-size: 14px;
}

.error-placeholder i {
  font-size: 24px;
  margin-bottom: 8px;
  opacity: 0.6;
}

.observer-target {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>