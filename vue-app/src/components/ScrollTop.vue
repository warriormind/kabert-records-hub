<template>
  <a
    href="#"
    id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center"
    :class="{ active: showScrollTop }"
    @click="scrollToTop"
  >
    <i class="bi bi-arrow-up-short"></i>
  </a>
</template>

<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      showScrollTop: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showScrollTop = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
