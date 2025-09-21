<template>
  <section id="services" class="services section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
          icon: 'bi bi-palette',
          title: 'Brand Identity Design',
          description: 'Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies.',
          badge: 'Most Popular'
        },
        {
          icon: 'bi bi-layout-text-window-reverse',
          title: 'UI/UX Design',
          description: 'Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu.'
        },
        {
          icon: 'bi bi-code-slash',
          title: 'Web Development',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
        },
        {
          icon: 'bi bi-phone',
          title: 'Mobile App Design',
          description: 'Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.'
        },
        {
          icon: 'bi bi-megaphone',
          title: 'Digital Marketing',
          description: 'Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus.'
        },
        {
          icon: 'bi bi-search',
          title: 'SEO Optimization',
          description: 'Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi.'
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
