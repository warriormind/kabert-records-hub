<template>
  <section id="why-us" class="why-us section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Why Us</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-lg-4 col-md-6"
          :data-aos="'fade-up'"
          :data-aos-delay="200 + index * 100"
        >
          <div class="feature-card">
            <div class="icon-wrapper">
              <i :class="feature.icon"></i>
            </div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
            <div class="feature-stats">
              <span class="stat-number" data-purecounter-start="0" data-purecounter-end="{{ feature.stat }}" data-purecounter-duration="2">{{ feature.stat }}</span>
              <span class="stat-label">{{ feature.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
          <div class="feature-showcase">
            <img src="/assets/img/illustration/illustration-14.webp" alt="Creative Process" class="img-fluid" @error="handleImageError">
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
          <div class="feature-content">
            <h3>Why Leading Brands Choose Us</h3>
            <p class="lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            <div class="feature-list">
              <div v-for="item in featureList" :key="item.title" class="feature-item">
                <div class="feature-icon">
                  <i class="bi bi-check-circle-fill"></i>
                </div>
                <div class="feature-text">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>

            <div class="cta-wrapper">
              <a href="#contact" class="btn btn-primary" @click="scrollToSection('contact')">Start Your Project</a>
              <a href="#portfolio" class="btn btn-outline" @click="scrollToSection('portfolio')">View Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyUs',
  data() {
    return {
      features: [
        {
          icon: 'bi bi-palette-fill',
          title: 'Creative Excellence',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
          stat: '95',
          label: '% Client Satisfaction'
        },
        {
          icon: 'bi bi-graph-up-arrow',
          title: 'Proven Results',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
          stat: '200',
          label: '% ROI Increase'
        },
        {
          icon: 'bi bi-award-fill',
          title: 'Expert Team',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.',
          stat: '50',
          label: '+ Awards Won'
        }
      ],
      featureList: [
        {
          title: 'Strategic Thinking',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.'
        },
        {
          title: 'Data-Driven Approach',
          description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
        },
        {
          title: '24/7 Support',
          description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.'
        }
      ]
    }
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
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>
