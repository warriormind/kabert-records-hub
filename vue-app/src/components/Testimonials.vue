<template>
  <section id="testimonials" class="testimonials section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Client Testimonials</h2>
      <p>Trusted by organizations across Africa for exceptional administrative and digital transformation services</p>
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
          name: 'Dr. Mary Banda',
          role: 'Director of Administration',
          avatar: '/assets/img/person/person-f-12.webp',
          content: 'Kabert Records Hub transformed our document management system completely. Their digitization services helped us comply with donor requirements while maintaining the highest standards of confidentiality. The team\'s expertise in both traditional records management and modern technology is unmatched.',
          company: 'Zambia Health Ministry'
        },
        {
          name: 'James Mulenga',
          role: 'Executive Director',
          avatar: '/assets/img/person/person-m-11.webp',
          content: 'The custom HR management system developed by Kabert Records Hub has streamlined our operations significantly. From payroll processing to employee records management, their solution is both powerful and user-friendly. Their ongoing support and local expertise make them the perfect technology partner for NGOs.',
          company: 'CARE Zambia'
        },
        {
          name: 'Patricia Zulu',
          role: 'Operations Manager',
          avatar: '/assets/img/person/person-f-8.webp',
          content: 'We needed a comprehensive IT infrastructure setup for our expanding operations. Kabert Records Hub delivered beyond our expectations - from LAN configuration to security protocols. Their agile approach and understanding of the Zambian business environment made the entire process smooth and efficient.',
          company: 'Zambia Breweries'
        },
        {
          name: 'Dr. Simon Chileshe',
          role: 'Deputy Director',
          avatar: '/assets/img/person/person-m-14.webp',
          content: 'The administrative workflow redesign implemented by Kabert Records Hub has improved our efficiency by 40%. Their secretariat services and minute-taking expertise, combined with modern digital tools, have transformed how we manage our organizational records and meetings.',
          company: 'University of Zambia'
        },
        {
          name: 'Grace Mwanza',
          role: 'Finance Director',
          avatar: '/assets/img/person/person-f-5.webp',
          content: 'As a growing SME, we needed affordable yet professional accounting software. Kabert Records Hub delivered a custom solution that perfectly fits our needs. Their subscription-based model makes advanced technology accessible to businesses like ours. Exceptional service and support.',
          company: 'Zambeef Products'
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
