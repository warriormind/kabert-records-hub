<template>
  <section id="services" class="services section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Services</h2>
      <p>Comprehensive administrative and digital transformation solutions tailored for organizations across Africa</p>
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
          <div class="service-card" @mouseenter="hoverService = index" @mouseleave="hoverService = null">
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
      hoverService: null,
      services: [
        {
          icon: 'bi bi-file-earmark-text',
          title: 'Records & Document Management',
          description: 'Comprehensive digital and physical records management including correspondence tracking, filing, scanning, indexing, and secure archiving solutions.',
          badge: 'Most Popular'
        },
        {
          icon: 'bi bi-code-slash',
          title: 'Software Development',
          description: 'Custom HR, CRM, payroll, and accounting software solutions, mobile app development, and workflow tracking dashboards.'
        },
        {
          icon: 'bi bi-gear',
          title: 'IT Consultancy & Facilities Management',
          description: 'Virtual CIO services, systems audits, IT policy development, and infrastructure setup including LANs, servers, and endpoint security.'
        },
        {
          icon: 'bi bi-cloud',
          title: 'Data Processing & Hosting',
          description: 'Document digitization, cloud-based archiving, secure hosting, database services, and business continuity with disaster recovery systems.'
        },
        {
          icon: 'bi bi-shield-check',
          title: 'Information Advisory Services',
          description: 'Compliance audits for data protection and financial records, knowledge base setup, training programs, and research support for project implementation.'
        },
        {
          icon: 'bi bi-clipboard-check',
          title: 'Administrative Workflow Support',
          description: 'Administrative workflow redesign, secretariat services, minute-taking, and combined office administrative solutions for efficient operations.'
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

<style scoped>
.services {
  background: white;
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

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.service-card h4 a {
  color: inherit;
  text-decoration: none;
}

.service-card p {
  color: #6c757d;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.service-badge {
  background: #28a745;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.service-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;
}

.service-link:hover {
  color: #0056b3;
}

.service-link i {
  transition: transform 0.3s;
}

.service-link:hover i {
  transform: translateX(5px);
}

.services-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
}

.services-cta h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.services-cta p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-primary {
  background: white;
  color: #007bff;
  border: 2px solid white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  background: transparent;
  color: white;
  transform: translateY(-3px);
}
</style>