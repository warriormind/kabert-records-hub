<template>
  <div class="skeleton-loader" :class="classes" :style="styles">
    <div v-if="type === 'text'" class="skeleton-text">
      <div class="skeleton-line" v-for="line in lines" :key="line" :style="{ width: getRandomWidth(line) }"></div>
    </div>
    <div v-else-if="type === 'card'" class="skeleton-card">
      <div class="skeleton-image"></div>
      <div class="skeleton-content">
        <div class="skeleton-title"></div>
        <div class="skeleton-text-line" v-for="line in 3" :key="line"></div>
        <div class="skeleton-button"></div>
      </div>
    </div>
    <div v-else-if="type === 'image'" class="skeleton-image"></div>
    <div v-else-if="type === 'avatar'" class="skeleton-avatar"></div>
    <div v-else class="skeleton-rect"></div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoader',
  props: {
    type: {
      type: String,
      default: 'rect',
      validator: value => ['rect', 'text', 'card', 'image', 'avatar'].includes(value)
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    lines: {
      type: Number,
      default: 1
    },
    rounded: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'skeleton-rounded': this.rounded,
        'skeleton-circle': this.circle
      }
    },
    styles() {
      const styles = {}
      if (this.width) styles.width = typeof this.width === 'number' ? `${this.width}px` : this.width
      if (this.height) styles.height = typeof this.height === 'number' ? `${this.height}px` : this.height
      return styles
    }
  },
  methods: {
    getRandomWidth(line) {
      const widths = ['100%', '90%', '80%', '85%', '95%', '75%']
      return widths[line % widths.length]
    }
  }
}
</script>

<style scoped>
.skeleton-loader {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-rounded {
  border-radius: 8px;
}

.skeleton-circle {
  border-radius: 50%;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Text Skeleton */
.skeleton-text .skeleton-line {
  height: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  background: inherit;
}

.skeleton-text .skeleton-line:last-child {
  width: 60%;
}

/* Card Skeleton */
.skeleton-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skeleton-image {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 16px;
  background: inherit;
}

.skeleton-content .skeleton-title {
  height: 24px;
  width: 80%;
  margin-bottom: 12px;
  background: inherit;
}

.skeleton-content .skeleton-text-line {
  height: 14px;
  margin-bottom: 8px;
  background: inherit;
}

.skeleton-content .skeleton-text-line:nth-child(2) {
  width: 90%;
}

.skeleton-content .skeleton-text-line:nth-child(3) {
  width: 70%;
}

.skeleton-content .skeleton-button {
  height: 36px;
  width: 120px;
  margin-top: 16px;
  border-radius: 18px;
  background: inherit;
}

/* Avatar Skeleton */
.skeleton-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: inherit;
}
</style>