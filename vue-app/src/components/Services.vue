<template>
  <section id="services" class="services section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Key Products and Services</h2>
      <p>Comprehensive administrative and digital transformation solutions tailored for African organizations</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-lg-4 col-md-6"
          :data-aos="'fade-up'"
          :data-aos-delay="200 + index * 100"
        >
          <div class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h4><a href="#">{{ service.title }}</a></h4>
            <p>{{ service.description }}</p>
            <div v-if="service.badge" class="service-badge">{{ service.badge }}</div>
            <a href="#" class="service-link" @click="showServiceDetails(service)">
              <span>Learn More</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <div class="services-cta">
            <h3>Ready to Transform Your Digital Presence?</h3>
            <p>Let's discuss your project and create something amazing together</p>
            <a href="#contact" class="btn btn-primary" @click="scrollToSection('contact')">Get Started Today</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          icon: 'bi bi-folder',
          title: 'Records & Document Management',
          description: 'Digital and physical records management, correspondence tracking, filing, scanning, and indexing services.',
          badge: 'Most Popular'
        },
        {
          icon: 'bi bi-gear',
          title: 'Administrative Workflow Support',
          description: 'Administrative workflow redesign, secretariat services, minute-taking, and comprehensive office administrative support.'
        },
        {
          icon: 'bi bi-code-slash',
          title: 'Software Development',
          description: 'Custom HR, CRM, payroll, and accounting software development, plus mobile app development for field operations.'
        },
        {
          icon: 'bi bi-pc-display',
          title: 'IT Consultancy & Facilities',
          description: 'Virtual CIO services, systems audits, IT policy development, infrastructure setup, LANs, servers, and endpoint security.'
        },
        {
          icon: 'bi bi-cloud',
          title: 'Data Processing & Hosting',
          description: 'Document digitization, secure cloud-based archiving, database services, and business continuity solutions.'
        },
        {
          icon: 'bi bi-lightbulb',
          title: 'Information Advisory Services',
          description: 'Compliance audits, knowledge base setup, training, and research support for project implementation.'
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
    showServiceDetails(service) {
      // In a real app, this would navigate to a service details page
      alert(`More details about: ${service.title}`)
    }
  }
}
</script>
