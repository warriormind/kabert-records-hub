<template>
  <section id="about" class="about section animate-child">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
          <div class="content">
            <h6 class="subtitle">About Kabert Records Hub</h6>
            <h2>Integrated Administrative and Digital Transformation Services</h2>
            <p>
              Founded in Zambia, Kabert Records Hub Limited offers a unique service model that combines traditional administrative support with advanced digital technology. Our commitment to service excellence, confidentiality, and innovation sets us apart in a rapidly evolving information economy.
            </p>

            <ul class="features-list">
              <li v-for="feature in features" :key="feature">
                <i class="bi bi-check-circle-fill"></i>
                <span>{{ feature }}</span>
              </li>
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
                <h3>{{ yearsExperience }}</h3>
                <p>Years of Expertise</p>
              </div>
              <div class="stats-item">
                <h3>{{ happyClients }}</h3>
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
  data() {
    return {
      features: [
        'Excellence: We deliver superior service and measurable results.',
        'Confidentiality: We strictly protect sensitive data.',
        'Innovation: We drive transformation through modern tools.',
        'Integrity: We build trust through transparency and accountability.',
        'Empowerment: We strengthen our clients through knowledge and systems.'
      ],
      yearsExperience: 0,
      happyClients: 0
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
      this.animateNumber(20, 'yearsExperience')
      this.animateNumber(500, 'happyClients')
    },
    animateNumber(target, property) {
      if (typeof target !== 'number' || !property) return

      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        this[property] = Math.floor(current)
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
.about {
  background: #f8f9fa;
}

.subtitle {
  color: #007bff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.about h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.about p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #6c757d;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
}

.features-list i {
  color: #28a745;
  margin-right: 1rem;
  margin-top: 0.2rem;
  font-size: 1.2rem;
}

.features-list span {
  flex: 1;
  color: #495057;
}

.image-composition {
  position: relative;
}

.image-main {
  position: relative;
  z-index: 2;
}

.image-main img {
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.image-secondary {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 200px;
  z-index: 1;
}

.image-secondary img {
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.stats-card {
  position: absolute;
  bottom: -30px;
  left: -30px;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  z-index: 3;
}

.stats-item {
  text-align: center;
}

.stats-item h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.stats-item p {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
}

.btn-primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
  color: white;
}

@media (max-width: 768px) {
  .about h2 {
    font-size: 2rem;
  }

  .image-secondary {
    position: static;
    width: 100%;
    margin-top: 2rem;
  }

  .stats-card {
    position: static;
    margin-top: 2rem;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>