<template>
  <section id="why-us" class="why-us section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Why Choose Kabert Records Hub</h2>
      <p>Leading the digital transformation of administrative and business processes across Africa</p>
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
            <h3>Market Leadership in African Digital Transformation</h3>
            <p class="lead">The demand for administrative and digital services is growing rapidly across Africa due to increasing compliance requirements, data security needs, and the transition to paperless operations.</p>

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
          icon: 'bi bi-shield-check',
          title: 'Uncompromising Security',
          description: 'We maintain the highest standards of confidentiality and data protection, ensuring your sensitive information remains secure throughout our service delivery.',
          stat: '100',
          label: '% Data Security'
        },
        {
          icon: 'bi bi-gear-wide-connected',
          title: 'Integrated Solutions',
          description: 'Our unique combination of traditional administrative expertise and cutting-edge digital technology provides comprehensive, end-to-end business solutions.',
          stat: '150',
          label: '+ Projects Delivered'
        },
        {
          icon: 'bi bi-lightning-charge',
          title: 'Agile & Adaptable',
          description: 'We deliver services with speed and flexibility, adapting to local market conditions and client requirements across diverse African contexts.',
          stat: '24',
          label: 'Hour Response Time'
        }
      ],
      featureList: [
        {
          title: 'Serving Diverse African Markets',
          description: 'Government departments, NGOs, private sector companies, educational institutions, and healthcare organizations trust us with their most critical administrative and digital transformation needs.'
        },
        {
          title: 'Meeting Growing Compliance Demands',
          description: 'Legal and donor compliance requirements, increased data security needs, and the transition to paperless operations drive the demand for our integrated services across Africa.'
        },
        {
          title: 'Affordable SME Solutions',
          description: 'We offer subscription-based digital admin services and affordable service plans tailored for small and medium enterprises, faith-based organizations, and schools.'
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
