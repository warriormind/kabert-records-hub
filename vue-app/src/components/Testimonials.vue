<template>
  <section id="testimonials" class="testimonials section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>What our clients say about our administrative and digital transformation services</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="testimonials-slider">
        <div class="swiper-wrapper">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="swiper-slide"
            :class="{ active: currentTestimonial === index }"
          >
            <div class="testimonial-card">
              <div class="testimonial-header">
                <div class="user-avatar">
                  <img :src="testimonial.avatar" :alt="testimonial.name" @error="handleImageError">
                </div>
                <div class="user-info">
                  <h3>{{ testimonial.name }}</h3>
                  <span class="user-role">{{ testimonial.role }}</span>
                  <div class="rating">
                    <i v-for="star in 5" :key="star" class="bi bi-star-fill"></i>
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
        <div class="swiper-pagination">
          <span
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="swiper-pagination-bullet"
            :class="{ 'swiper-pagination-bullet-active': currentTestimonial === index }"
            @click="goToTestimonial(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      currentTestimonial: 0,
      testimonials: [
        {
          name: 'Sarah Mwanza',
          role: 'HR Director',
          avatar: '/assets/img/person/person-f-12.webp',
          content: 'Kabert Records Hub transformed our HR processes completely. Their custom payroll system and document management solution saved us countless hours and improved our data accuracy by 95%. Highly professional team!',
          company: 'Zambia Mining Corp'
        },
        {
          name: 'David Banda',
          role: 'Operations Manager',
          avatar: '/assets/img/person/person-m-11.webp',
          content: 'The records digitization project was executed flawlessly. Kabert\'s team converted over 10,000 physical documents to digital format with perfect indexing. Our compliance audits are now seamless and efficient.',
          company: 'Ministry of Health'
        },
        {
          name: 'Grace Phiri',
          role: 'Finance Director',
          avatar: '/assets/img/person/person-f-8.webp',
          content: 'Their accounting software solution integrated perfectly with our existing systems. The automated reporting features and real-time financial dashboards have revolutionized how we manage our finances. Excellent support team!',
          company: 'Lusaka Water Company'
        },
        {
          name: 'James Mulenga',
          role: 'IT Director',
          avatar: '/assets/img/person/person-m-14.webp',
          content: 'Kabert\'s IT consultancy services helped us establish a robust network infrastructure and implement comprehensive security protocols. Their virtual CIO guidance has been invaluable for our digital transformation journey.',
          company: 'Copperbelt University'
        },
        {
          name: 'Mary Tembo',
          role: 'Executive Director',
          avatar: '/assets/img/person/person-f-5.webp',
          content: 'The administrative workflow redesign and secretariat services provided by Kabert have streamlined our operations significantly. Meeting management, correspondence tracking, and document archiving are now automated and efficient.',
          company: 'African Development NGO'
        }
      ]
    }
  },
  mounted() {
    this.startAutoPlay()
  },
  methods: {
    goToTestimonial(index) {
      this.currentTestimonial = index
    },
    startAutoPlay() {
      setInterval(() => {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length
      }, 5000)
    },
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>

<style scoped>
.testimonials {
  background: white;
  padding: 80px 0;
}

.testimonials-slider {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.swiper-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.swiper-slide {
  flex: 0 0 100%;
  display: none;
}

.swiper-slide.active {
  display: block;
}

.testimonial-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
}

.testimonial-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #2c3e50;
}

.user-role {
  display: block;
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.rating {
  color: #ffc107;
}

.testimonial-content {
  position: relative;
  margin-bottom: 1.5rem;
}

.quote-mark {
  position: absolute;
  top: -10px;
  left: -10px;
  font-size: 2rem;
  color: #e9ecef;
  z-index: 1;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #495057;
  font-style: italic;
  margin: 0;
  padding-left: 2rem;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-badge,
.verified-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #495057;
}

.verified-badge {
  background: #d4edda;
  color: #155724;
}

.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #dee2e6;
  cursor: pointer;
  transition: background 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: #007bff;
}
</style>