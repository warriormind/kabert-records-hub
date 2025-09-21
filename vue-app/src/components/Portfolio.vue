<template>
  <section id="portfolio" class="portfolio section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="isotope-layout">
        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
          <li
            v-for="filter in filters"
            :key="filter.key"
            :class="{ 'filter-active': activeFilter === filter.key }"
            @click="setActiveFilter(filter.key)"
          >
            {{ filter.label }}
          </li>
        </ul>

        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="col-xl-4 col-lg-6 portfolio-item isotope-item"
            :class="project.filterClass"
          >
            <div class="portfolio-wrapper">
              <div class="portfolio-image">
                <img :src="project.image" :alt="project.title" class="img-fluid" loading="lazy" @error="handleImageError">
                <div class="portfolio-hover">
                  <div class="portfolio-actions">
                    <a :href="project.image" class="glightbox action-btn preview-btn" title="Preview Project" @click.prevent="openImageModal(project)">
                      <i class="bi bi-eye"></i>
                    </a>
                    <a href="#" class="action-btn details-btn" title="View Details" @click="viewProjectDetails(project)">
                      <i class="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="portfolio-content">
                <div class="portfolio-meta">
                  <span class="project-type">{{ project.type }}</span>
                  <div class="project-rating">
                    <i class="bi bi-star-fill"></i>
                    <span>{{ project.rating }}</span>
                  </div>
                </div>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="portfolio-tech">
                  <span v-for="tech in project.tech" :key="tech" class="tech-badge">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-cta text-center" data-aos="fade-up" data-aos-delay="400">
        <h4>Ready to start your next project?</h4>
        <p>Let's work together to bring your digital vision to life</p>
        <div class="cta-buttons">
          <a href="#contact" class="btn btn-primary" @click="scrollToSection('contact')">Start a Project</a>
          <a href="#portfolio" class="btn btn-outline">View All Work</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      activeFilter: '*',
      filters: [
        { key: '*', label: 'All Projects' },
        { key: '.filter-web', label: 'Records Management' },
        { key: '.filter-mobile', label: 'Software Development' },
        { key: '.filter-branding', label: 'IT Consultancy' },
        { key: '.filter-ui', label: 'Data Processing' }
      ],
      projects: [
        {
          id: 1,
          title: 'Ministry Document Digitization',
          type: 'Records Management',
          filterClass: 'filter-web',
          image: '/assets/img/portfolio/portfolio-7.webp',
          rating: '4.8',
          description: 'Complete digitization of 50,000+ government documents with secure indexing, search capabilities, and compliance tracking for improved administrative efficiency.',
          tech: ['Document Scanning', 'OCR Technology', 'Cloud Storage']
        },
        {
          id: 2,
          title: 'Custom HR Management System',
          type: 'Software Development',
          filterClass: 'filter-mobile',
          image: '/assets/img/portfolio/portfolio-8.webp',
          rating: '4.9',
          description: 'Comprehensive HR solution with payroll processing, employee records, leave management, and performance tracking for a major mining corporation.',
          tech: ['PHP/MySQL', 'Payroll Integration', 'Reporting']
        },
        {
          id: 3,
          title: 'University Network Infrastructure',
          type: 'IT Consultancy',
          filterClass: 'filter-branding',
          image: '/assets/img/portfolio/portfolio-9.webp',
          rating: '5.0',
          description: 'Complete IT infrastructure setup including LAN configuration, server deployment, security protocols, and staff training for enhanced connectivity.',
          tech: ['Network Setup', 'Server Config', 'Security']
        },
        {
          id: 4,
          title: 'Financial Records Archive System',
          type: 'Data Processing',
          filterClass: 'filter-ui',
          image: '/assets/img/portfolio/portfolio-10.webp',
          rating: '4.7',
          description: 'Secure cloud-based archiving solution with automated backup, disaster recovery, and compliance reporting for financial institution data protection.',
          tech: ['Cloud Hosting', 'Data Backup', 'Compliance']
        },
        {
          id: 5,
          title: 'NGO Administrative Workflow System',
          type: 'Records Management',
          filterClass: 'filter-web',
          image: '/assets/img/portfolio/portfolio-11.webp',
          rating: '4.6',
          description: 'Streamlined administrative processes including correspondence tracking, meeting management, and document workflow automation for improved operational efficiency.',
          tech: ['Workflow Automation', 'Document Tracking', 'Process Optimization']
        },
        {
          id: 6,
          title: 'Custom Accounting Software',
          type: 'Software Development',
          filterClass: 'filter-mobile',
          image: '/assets/img/portfolio/portfolio-12.webp',
          rating: '4.8',
          description: 'Integrated accounting solution with real-time financial reporting, automated invoicing, and multi-currency support for water utility company operations.',
          tech: ['Financial Reporting', 'Multi-Currency', 'API Integration']
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === '*') {
        return this.projects
      }
      return this.projects.filter(project => project.filterClass === this.activeFilter.replace('.', ''))
    }
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    viewProjectDetails(project) {
      alert(`Project: ${project.title}\n\n${project.description}`)
    },
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    },
    openImageModal(project) {
      // Simple modal implementation
      const modal = document.createElement('div')
      modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 10000; cursor: pointer;
      `
      const img = document.createElement('img')
      img.src = project.image
      img.style.maxWidth = '90%'
      img.style.maxHeight = '90%'
      img.style.objectFit = 'contain'
      modal.appendChild(img)
      modal.onclick = () => document.body.removeChild(modal)
      document.body.appendChild(modal)
    }
  }
}
</script>
