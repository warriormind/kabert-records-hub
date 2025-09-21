<template>
  <section id="hero" class="hero section animate-child">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 animate-child" data-aos="fade-right" data-aos-delay="100">
          <div class="hero-content">
            <h1>Empowering Organizations Through Digital Transformation</h1>
            <p>We provide integrated administrative support, custom digital solutions, and strategic IT consultancy that improves business efficiency, enhances data security, and drives organizational growth across Africa and beyond.</p>
            <div class="hero-buttons">
              <a href="#about" class="btn btn-primary" @click="scrollToSection('about')">Get Started</a>
              <a href="#portfolio" class="btn btn-outline" @click="scrollToSection('portfolio')">Our Work</a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number" ref="projectsCounter" data-target="150">0</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number" ref="satisfactionCounter" data-target="95">0</span>
                <span class="stat-label">Client Satisfaction</span>
              </div>
              <div class="stat-item">
                <span class="stat-number" ref="teamCounter" data-target="24">0</span>
                <span class="stat-label">Team Members</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 animate-child" data-aos="fade-left" data-aos-delay="200">
          <div class="hero-visual">
            <div class="hero-carousel">
              <div class="carousel-container">
                <div
                  v-for="(slide, index) in slides"
                  :key="index"
                  class="carousel-slide"
                  :class="{ active: currentSlide === index }"
                >
                  <img :src="slide.image" :alt="slide.alt" class="img-fluid" @error="handleImageError">
                  <div class="carousel-caption">
                    <h4>{{ slide.title }}</h4>
                    <p>{{ slide.description }}</p>
                  </div>
                </div>
              </div>

              <div class="carousel-nav">
                <button class="carousel-btn prev-btn" @click="prevSlide" aria-label="Previous slide">
                  <i class="bi bi-chevron-left"></i>
                </button>
                <div class="carousel-indicators">
                  <span
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="indicator"
                    :class="{ active: currentSlide === index }"
                    @click="goToSlide(index)"
                  ></span>
                </div>
                <button class="carousel-btn next-btn" @click="nextSlide" aria-label="Next slide">
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-bg-elements">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-particles" ref="particles"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: '/assets/img/managerial-accounting-helps-managers.webp',
          alt: 'Management Accounting Services',
          title: 'Management Accounting',
          description: 'Strategic financial planning and analysis'
        },
        {
          image: '/assets/img/secretarial-works-500x500.webp',
          alt: 'Secretarial Services',
          title: 'Secretarial Services',
          description: 'Professional administrative support'
        },
        {
          image: '/assets/img/web-design-technology-browsing-programming-concept.jpg',
          alt: 'Web Development',
          title: 'Web Development',
          description: 'Modern digital solutions'
        },
        {
          image: '/assets/img/management-accounting.webp',
          alt: 'Business Management',
          title: 'Business Management',
          description: 'Comprehensive organizational solutions'
        },
        {
          image: '/assets/img/minute record.jpg',
          alt: 'Records Management',
          title: 'Records Management',
          description: 'Secure document handling'
        }
      ],
      counters: [],
      particles: []
    }
  },
  mounted() {
    this.startCarousel()
    this.initCounters()
    this.createParticles()
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    startCarousel() {
      setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
    },
    goToSlide(index) {
      this.currentSlide = index
    },
    initCounters() {
      this.$nextTick(() => {
        const counters = [
          { element: this.$refs.projectsCounter, target: 150 },
          { element: this.$refs.satisfactionCounter, target: 95 },
          { element: this.$refs.teamCounter, target: 24 }
        ]

        counters.forEach(counter => {
          if (counter.element) {
            this.animateCounter(counter.element, counter.target)
          }
        })
      })
    },
    animateCounter(element, target) {
      if (!element) return

      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        element.textContent = Math.floor(current)
      }, 30)
    },
    createParticles() {
      const particlesContainer = this.$refs.particles
      if (!particlesContainer) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 10 + 's'
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
        particlesContainer.appendChild(particle)
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

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn {
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #007bff;
  color: white;
  border: 2px solid #007bff;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #007bff;
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffd700;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.hero-carousel {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.carousel-slide {
  display: none;
  position: relative;
}

.carousel-slide.active {
  display: block;
}

.carousel-slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  color: white;
}

.carousel-caption h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.carousel-nav {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 50px;
}

.carousel-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.3s;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.carousel-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active {
  background: white;
}

.hero-bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
}

.bg-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 15s infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style>