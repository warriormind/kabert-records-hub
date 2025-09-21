<template>
  <section id="testimonials" class="testimonials section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="testimonials-slider swiper init-swiper">
        <script type="application/json" class="swiper-config">
          {
            "loop": true,
            "speed": 600,
            "autoplay": {
              "delay": 4000
            },
            "slidesPerView": 1,
            "centeredSlides": true,
            "spaceBetween": 20,
            "pagination": {
              "el": ".swiper-pagination",
              "type": "bullets",
              "clickable": true
            },
            "breakpoints": {
              "768": {
                "slidesPerView": 1.5,
                "spaceBetween": 30
              },
              "1200": {
                "slidesPerView": 3,
                "spaceBetween": 40
              }
            }
          }
        </script>
        <div class="swiper-wrapper">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="swiper-slide"
          >
            <div class="testimonial-card" :data-aos="'zoom-in'" :data-aos-delay="100 + index * 100">
              <div class="testimonial-header">
                <div class="user-avatar">
                  <img :src="testimonial.avatar" :alt="testimonial.name" @error="handleImageError">
                </div>
                <div class="user-info">
                  <h3>{{ testimonial.name }}</h3>
                  <span class="user-role">{{ testimonial.role }}</span>
                  <div class="rating">
                    <i v-for="star in 5" :key="star" :key="star" class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div class="testimonial-content">
                <div class="quote-mark">
                  <i class="bi bi-quote"></i>
                </div>
                <p>{{ testimonial.content }}</p>
              </div>
              <div class="testimonial-footer">
                <div class="company-badge">
                  <i class="bi bi-building"></i>
                  <span>{{ testimonial.company }}</span>
                </div>
                <div class="verified-badge">
                  <i class="bi bi-patch-check-fill"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          name: 'Jennifer Martinez',
          role: 'Product Designer',
          avatar: '/assets/img/person/person-f-12.webp',
          content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.',
          company: 'TechCorp'
        },
        {
          name: 'Alexander Chen',
          role: 'Frontend Engineer',
          avatar: '/assets/img/person/person-m-11.webp',
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
          company: 'InnovateLab'
        },
        {
          name: 'Rachel Taylor',
          role: 'Marketing Lead',
          avatar: '/assets/img/person/person-f-8.webp',
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
          company: 'GrowthCo'
        },
        {
          name: 'Christopher Lee',
          role: 'VP Engineering',
          avatar: '/assets/img/person/person-m-14.webp',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
          company: 'DevStream'
        },
        {
          name: 'Amanda Rodriguez',
          role: 'UX Researcher',
          avatar: '/assets/img/person/person-f-5.webp',
          content: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.',
          company: 'UserFirst'
        }
      ]
    }
  },
  methods: {
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>
