<template>
  <section id="hero" class="hero section animate-child">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <div class="hero-content">
            <h1>Transform Your Digital Presence</h1>
            <p>We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</p>
            <div class="hero-buttons">
              <a href="#about" class="btn btn-primary" @click="scrollToSection('about')">Get Started</a>
              <a href="#portfolio" class="btn btn-outline" @click="scrollToSection('portfolio')">Our Work</a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1">0</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="1">0</span>
                <span class="stat-label">Client Satisfaction</span>
              </div>
              <div class="stat-item">
                <span class="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1">0</span>
                <span class="stat-label">Team Members</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
          <div class="hero-visual">
            <div class="hero-image">
              <img src="/assets/img/misc/misc-16.webp" alt="Digital Agency Hero" class="img-fluid" @error="handleImageError">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-bg-elements">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-particles"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
    }
  },
  mounted() {
    // Purecounter will handle the stats animation
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      // Optionally set a fallback image
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>
