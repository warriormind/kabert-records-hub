<template>
  <section id="about" class="about section animate-child">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
          <div class="content">
            <h6 class="subtitle">Discover Our Story</h6>
            <h2>Innovative Solutions for a Digital-First World</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul class="features-list">
              <li><i class="bi bi-check-circle-fill"></i><span>Excepteur sint occaecat cupidatat non proident.</span></li>
              <li><i class="bi bi-check-circle-fill"></i><span>Nemo enim ipsam voluptatem quia voluptas sit.</span></li>
              <li><i class="bi bi-check-circle-fill"></i><span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            </ul>

            <a href="#services" class="btn btn-primary" @click="scrollToSection('services')">Discover More</a>
          </div>
        </div>

        <div class="col-lg-7" data-aos="fade-left" data-aos-delay="300">
          <div class="image-composition">
            <div class="image-main">
              <img src="/assets/img/about/about-9.webp" alt="Modern office with a team working" class="img-fluid" loading="lazy" @error="handleImageError">
            </div>
            <div class="image-secondary">
              <img src="/assets/img/about/about-square-8.webp" alt="Collaborative discussion" class="img-fluid" loading="lazy" @error="handleImageError">
            </div>
            <div class="stats-card">
              <div class="stats-item">
                <h3>20+</h3>
                <p>Years of Expertise</p>
              </div>
              <div class="stats-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>
