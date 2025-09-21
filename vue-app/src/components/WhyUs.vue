<template>
  <section id="why-us" class="why-us section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Why Choose Kabert</h2>
      <p>Leading the transition to smarter, secure, and more efficient information management solutions across Africa</p>
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
              <span class="stat-number" :ref="`stat-${index}`">{{ feature.stat }}</span>
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
          icon: 'bi bi-shield-lock-fill',
          title: 'Confidentiality & Security',
          description: 'We strictly protect sensitive data with high standards of confidentiality and security, ensuring compliance with legal and industry regulations.',
          stat: '100',
          label: '% Data Security'
        },
        {
          icon: 'bi bi-gear-wide-connected',
          title: 'Integrated Solutions',
          description: 'Unique combination of administrative support with advanced digital technology, providing comprehensive solutions for modern organizations.',
          stat: '500',
          label: '+ Organizations Served'
        },
        {
          icon: 'bi bi-globe-africa',
          title: 'Local Expertise',
          description: 'Deep understanding of African markets with agile delivery and local adaptability, serving government, NGOs, and private sector clients.',
          stat: '4',
          label: 'Countries Served'
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
  mounted() {
    this.animateStats()
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    animateStats() {
      this.$nextTick(() => {
        this.features.forEach((feature, index) => {
          this.animateNumber(feature.stat, `stat-${index}`)
        })
      })
    },
    animateNumber(target, ref) {
      if (typeof target !== 'number' || !ref) return

      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        const element = this.$refs[ref]
        if (element && element.length > 0) {
          element[0].textContent = Math.floor(current)
        }
      }, 50)
    },
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>

<style scoped>
.why-us {
  background: #f8f9fa;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
}

.feature-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.feature-card p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-stats {
  margin-top: auto;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #007bff;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.feature-showcase img {
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.feature-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.lead {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.feature-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  margin-bottom: 1.5rem;
}

.feature-icon {
  color: #28a745;
  margin-right: 1rem;
  margin-top: 0.2rem;
  font-size: 1.2rem;
}

.feature-text h5 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.feature-text p {
  color: #6c757d;
  line-height: 1.6;
}

.cta-wrapper {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
}

.btn-outline {
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .cta-wrapper {
    flex-direction: column;
  }
}
</style>