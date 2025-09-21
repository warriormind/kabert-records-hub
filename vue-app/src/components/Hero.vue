<template>
  <section id="hero" class="hero section animate-child">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <div class="hero-content">
            <h1>Transform Your Digital Presence</h1>
            <p>We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</p>
            <div class="hero-buttons">
              <a href="#about" class="btn btn-primary" @click="scrollToSection('about')">Get Started</a>
              <a href="#portfolio" class="btn btn-outline" @click="scrollToSection('portfolio')">Our Work</a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1">0</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="1">0</span>
                <span class="stat-label">Client Satisfaction</span>
              </div>
              <div class="stat-item">
                <span class="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1">0</span>
                <span class="stat-label">Team Members</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
          <div class="hero-visual">
            <div class="hero-carousel swiper init-swiper">
              <script type="application/json" class="swiper-config">
                {
                  "loop": true,
                  "speed": 800,
                  "autoplay": {
                    "delay": 3000,
                    "disableOnInteraction": false
                  },
                  "effect": "fade",
                  "fadeEffect": {
                    "crossFade": true
                  },
                  "pagination": {
                    "el": ".swiper-pagination",
                    "clickable": true,
                    "dynamicBullets": true
                  },
                  "navigation": {
                    "nextEl": ".swiper-button-next",
                    "prevEl": ".swiper-button-prev"
                  }
                }
                </script>
                
                <style scoped>
                .hero-carousel {
                  position: relative;
                  border-radius: 16px;
                  overflow: hidden;
                  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }
                
                .hero-carousel .swiper-wrapper {
                  height: 400px;
                }
                
                .hero-carousel .hero-image {
                  position: relative;
                  width: 100%;
                  height: 100%;
                }
                
                .hero-carousel .hero-image img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: transform 0.3s ease;
                }
                
                .hero-carousel .hero-image:hover img {
                  transform: scale(1.02);
                }
                
                .carousel-caption {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
                  padding: 30px 20px 20px;
                  color: white;
                  text-align: center;
                }
                
                .carousel-caption h4 {
                  font-size: 1.5rem;
                  font-weight: 700;
                  margin-bottom: 8px;
                  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                }
                
                .carousel-caption p {
                  font-size: 1rem;
                  margin: 0;
                  opacity: 0.9;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                }
                
                .hero-carousel .swiper-pagination {
                  bottom: 15px;
                }
                
                .hero-carousel .swiper-button-next,
                .hero-carousel .swiper-button-prev {
                  color: white;
                  background: rgba(0, 0, 0, 0.5);
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  margin-top: -20px;
                }
                
                .hero-carousel .swiper-button-next:hover,
                .hero-carousel .swiper-button-prev:hover {
                  background: rgba(0, 0, 0, 0.8);
                }
                
                @media (max-width: 768px) {
                  .hero-carousel .swiper-wrapper {
                    height: 300px;
                  }
                
                  .carousel-caption h4 {
                    font-size: 1.2rem;
                  }
                
                  .carousel-caption p {
                    font-size: 0.9rem;
                  }
                }
                </style>
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="hero-image">
                    <img src="/assets/img/web-design-technology-browsing-programming-concept.jpg" alt="Web Design & Technology" class="img-fluid" @error="handleImageError">
                    <div class="carousel-caption">
                      <h4>Web Development</h4>
                      <p>Modern, responsive websites</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="hero-image">
                    <img src="/assets/img/management-accounting.webp" alt="Management Accounting" class="img-fluid" @error="handleImageError">
                    <div class="carousel-caption">
                      <h4>Financial Services</h4>
                      <p>Accounting & financial management</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="hero-image">
                    <img src="/assets/img/secretarial-works-500x500.webp" alt="Secretarial Services" class="img-fluid" @error="handleImageError">
                    <div class="carousel-caption">
                      <h4>Administrative Support</h4>
                      <p>Professional secretarial services</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="hero-image">
                    <img src="/assets/img/minute record.jpg" alt="Minute Recording" class="img-fluid" @error="handleImageError">
                    <div class="carousel-caption">
                      <h4>Meeting Management</h4>
                      <p>Professional minute taking</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="hero-image">
                    <img src="/assets/img/managerial-accounting-helps-managers.webp" alt="Managerial Accounting" class="img-fluid" @error="handleImageError">
                    <div class="carousel-caption">
                      <h4>Business Intelligence</h4>
                      <p>Data-driven decision making</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-bg-elements">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-particles"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
    }
  },
  mounted() {
    // Purecounter will handle the stats animation
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
      // Optionally set a fallback image
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>
