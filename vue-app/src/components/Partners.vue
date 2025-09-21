<template>
  <section id="partners" class="partners section animate-child">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="section-title text-center">
        <h2>Our Trusted Partners</h2>
        <p>We collaborate with industry leaders to deliver cutting-edge solutions</p>
      </div>

      <div class="partners-carousel">
        <div class="partners-track" :style="{ transform: `translateX(-${currentPosition}px)` }">
          <div v-for="partner in partners" :key="partner.name" class="partner-item">
            <div class="partner-logo">
              <img :src="partner.logo" :alt="partner.alt" class="partner-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      currentPosition: 0,
      partners: [
        { name: 'Veeam', logo: '/assets/img/veeam.png', alt: 'Veeam - Backup & Recovery Solutions' },
        { name: 'Xerox', logo: '/assets/img/xerox.jpg', alt: 'Xerox - Document Solutions' },
        { name: 'Aruti', logo: '/assets/img/aruti.png', alt: 'Aruti - IT Solutions' }
      ]
    }
  },
  mounted() {
    this.startAnimation()
  },
  methods: {
    startAnimation() {
      setInterval(() => {
        this.currentPosition += 1
        if (this.currentPosition >= 300) {
          this.currentPosition = 0
        }
      }, 50)
    }
  }
}
</script>

<style scoped>
.partners {
  background: #f8f9fa;
  padding: 60px 0;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-title p {
  font-size: 1.1rem;
  color: #6c757d;
}

.partners-carousel {
  overflow: hidden;
  margin-top: 3rem;
}

.partners-track {
  display: flex;
  width: calc(200px * 6);
  animation: scroll 20s linear infinite;
}

.partner-item {
  flex: 0 0 200px;
  padding: 0 20px;
}

.partner-logo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.05);
}

.partner-image {
  max-width: 150px;
  max-height: 60px;
  object-fit: contain;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>