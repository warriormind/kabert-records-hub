<template>
  <section id="portfolio" class="portfolio section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Showcasing our successful projects in records management, software development, and digital transformation across Africa</p>
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

<style scoped>
.portfolio {
  background: white;
}

.portfolio-filters {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 0;
}

.portfolio-filters li {
  margin: 0 10px;
  padding: 10px 20px;
  background: #f8f9fa;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.portfolio-filters li:hover,
.portfolio-filters li.filter-active {
  background: #007bff;
  color: white;
}

.portfolio-item {
  margin-bottom: 2rem;
}

.portfolio-wrapper {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.portfolio-wrapper:hover {
  transform: translateY(-10px);
}

.portfolio-image {
  position: relative;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-wrapper:hover .portfolio-image img {
  transform: scale(1.05);
}

.portfolio-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-wrapper:hover .portfolio-hover {
  opacity: 1;
}

.portfolio-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  width: 50px;
  height: 50px;
  background: white;
  color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: scale(1.1);
  background: #007bff;
  color: white;
}

.portfolio-content {
  padding: 1.5rem;
}

.portfolio-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-type {
  background: #e9ecef;
  color: #495057;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-rating {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ffc107;
  font-weight: 600;
}

.portfolio-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.portfolio-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.portfolio-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: #f8f9fa;
  color: #495057;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

.portfolio-cta {
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
}

.portfolio-cta h4 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.portfolio-cta p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #007bff;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #007bff;
}
</style>