<template>
  <section id="about" class="about section animate-child">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
          <div class="content">
            <h6 class="subtitle">About Kabert Records Hub</h6>
            <h2>Empowering Organizations Through Digital Transformation</h2>
            <p>
              Kabert Records Hub Limited is an innovative business solutions provider committed to empowering organizations across Africa and beyond through integrated administrative and digital transformation services. We specialize in providing smart, scalable, and secure solutions for record management, software development, data hosting, IT consulting, and process automation.
            </p>

            <div class="mission-vision-section">
              <div class="mission-item">
                <h4><i class="bi bi-target"></i> Our Mission</h4>
                <p>To provide integrated administrative support, custom digital solutions, and strategic IT consultancy that improves business efficiency, enhances data security, and drives organizational growth.</p>
              </div>

              <div class="vision-item">
                <h4><i class="bi bi-eye"></i> Our Vision</h4>
                <p>To become the most trusted and innovative partner for administrative and digital transformation services in Africa and beyond.</p>
              </div>
            </div>

            <div class="values-section">
              <h4><i class="bi bi-star"></i> Our Core Values</h4>
              <ul class="values-list">
                <li><strong>Excellence:</strong> We deliver superior service and measurable results.</li>
                <li><strong>Confidentiality:</strong> We strictly protect sensitive data.</li>
                <li><strong>Innovation:</strong> We drive transformation through modern tools.</li>
                <li><strong>Integrity:</strong> We build trust through transparency and accountability.</li>
                <li><strong>Empowerment:</strong> We strengthen our clients through knowledge and systems.</li>
              </ul>
            </div>

            <a href="#services" class="btn btn-primary" @click="scrollToSection('services')">Explore Our Services</a>
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
                <h3>150+</h3>
                <p>Projects Delivered</p>
              </div>
              <div class="stats-item">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div class="stats-item">
                <h3>24h</h3>
                <p>Average Response</p>
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

<style scoped>
.mission-vision-section {
  margin: 2rem 0;
}

.mission-item,
.vision-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--accent-color);
}

.mission-item h4,
.vision-item h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--heading-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.mission-item h4 i,
.vision-item h4 i {
  color: var(--accent-color);
  font-size: 1.2rem;
}

.mission-item p,
.vision-item p {
  color: var(--default-color);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.values-section {
  margin: 2rem 0;
}

.values-section h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--heading-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.values-section h4 i {
  color: var(--accent-color);
  font-size: 1.2rem;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.values-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--default-color);
  line-height: 1.6;
}

.values-list li:last-child {
  border-bottom: none;
}

.values-list li strong {
  color: var(--accent-color);
  min-width: 120px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .mission-item,
  .vision-item {
    padding: 1rem;
  }

  .mission-item h4,
  .vision-item h4 {
    font-size: 1rem;
  }

  .values-list li {
    flex-direction: column;
    gap: 0.5rem;
  }

  .values-list li strong {
    min-width: auto;
  }
}
</style>
