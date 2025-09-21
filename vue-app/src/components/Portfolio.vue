<template>
  <section id="portfolio" class="portfolio section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="isotope-layout">
        <ul
          class="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay="200"
          role="tablist"
          aria-label="Portfolio filters"
        >
          <li
            v-for="filter in filters"
            :key="filter.key"
            :class="{ 'filter-active': activeFilter === filter.key }"
            @click="setActiveFilter(filter.key)"
            @keydown.enter="setActiveFilter(filter.key)"
            @keydown.space.prevent="setActiveFilter(filter.key)"
            :tabindex="0"
            role="tab"
            :aria-selected="activeFilter === filter.key"
            :aria-controls="`portfolio-${filter.key}`"
          >
            {{ filter.label }}
          </li>
        </ul>

        <div
          v-if="loading"
          class="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            v-for="n in 6"
            :key="n"
            class="col-xl-4 col-lg-6 portfolio-item isotope-item"
          >
            <SkeletonLoader type="card" />
          </div>
        </div>

        <div
          v-else
          class="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="300"
          role="tabpanel"
          :aria-labelledby="`filter-${activeFilter}`"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="col-xl-4 col-lg-6 portfolio-item isotope-item"
            :class="project.filterClass"
          >
            <article class="portfolio-wrapper">
              <div class="portfolio-image">
                <LazyImage
                  :src="project.image"
                  :alt="project.title"
                  width="100%"
                  height="250px"
                  rounded
                  @error="handleImageError"
                />
                <div class="portfolio-hover">
                  <div class="portfolio-actions">
                    <button
                      @click="openLightbox(project)"
                      class="glightbox action-btn preview-btn"
                      :aria-label="`Preview ${project.title}`"
                      title="Preview Project"
                    >
                      <i class="bi bi-eye" aria-hidden="true"></i>
                    </button>
                    <button
                      @click="viewProjectDetails(project)"
                      class="action-btn details-btn"
                      :aria-label="`View details for ${project.title}`"
                      title="View Details"
                    >
                      <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="portfolio-content">
                <div class="portfolio-meta">
                  <span class="project-type">{{ project.type }}</span>
                  <div class="project-rating" :aria-label="`Rating: ${project.rating} out of 5 stars`">
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <span>{{ project.rating }}</span>
                  </div>
                </div>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="portfolio-tech" role="list" :aria-label="`Technologies used in ${project.title}`">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="tech-badge"
                    role="listitem"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </article>
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

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-modal" @click="closeLightbox" role="dialog" aria-modal="true" :aria-labelledby="`lightbox-title-${currentProject?.id}`">
      <div class="lightbox-content" @click.stop>
        <button @click="closeLightbox" class="lightbox-close" aria-label="Close lightbox">
          <i class="bi bi-x-lg"></i>
        </button>
        <div v-if="currentProject" class="lightbox-body">
          <div class="lightbox-image">
            <img :src="currentProject.image" :alt="currentProject.title" />
          </div>
          <div class="lightbox-info">
            <h3 :id="`lightbox-title-${currentProject.id}`">{{ currentProject.title }}</h3>
            <div class="lightbox-meta">
              <span class="project-type">{{ currentProject.type }}</span>
              <div class="project-rating">
                <i class="bi bi-star-fill"></i>
                <span>{{ currentProject.rating }}</span>
              </div>
            </div>
            <p class="lightbox-description">{{ currentProject.description }}</p>
            <div class="lightbox-tech">
              <h4>Technologies Used:</h4>
              <div class="tech-tags">
                <span v-for="tech in currentProject.tech" :key="tech" class="tech-badge">{{ tech }}</span>
              </div>
            </div>
            <div class="lightbox-actions">
              <button @click="viewProjectDetails(currentProject)" class="btn btn-primary">
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkeletonLoader from './SkeletonLoader.vue'
import LazyImage from './LazyImage.vue'

export default {
  name: 'Portfolio',
  components: {
    SkeletonLoader,
    LazyImage
  },
  data() {
    return {
      activeFilter: '*',
      loading: true,
      lightboxOpen: false,
      currentProject: null,
      filters: [
        { key: '*', label: 'All Projects' },
        { key: '.filter-web', label: 'Records Management' },
        { key: '.filter-mobile', label: 'Software Development' },
        { key: '.filter-branding', label: 'IT Consultancy' },
        { key: '.filter-ui', label: 'Data Processing' }
      ],
      projects: []
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
  mounted() {
    // Simulate loading delay for demonstration
    setTimeout(() => {
      this.loadProjects()
    }, 1000)
  },
  methods: {
    loadProjects() {
      this.projects = [
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
      this.loading = false
    },
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
      // Enhanced project details modal
      const details = `
Project: ${project.title}
Type: ${project.type}
Rating: ${project.rating}/5

Description:
${project.description}

Technologies:
${project.tech.join(', ')}

Client: ${project.client || 'Confidential'}
Duration: ${project.duration || 'Project-based'}
      `
      alert(details)
    },
    handleImageError(src) {
      console.warn('Image failed to load:', src)
    },
    openLightbox(project) {
      this.currentProject = project
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      this.currentProject = null
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
/* Lightbox Modal Styles */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  animation: slideIn 0.3s ease;
}

.lightbox-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

.lightbox-body {
  display: flex;
  max-height: 80vh;
}

.lightbox-image {
  flex: 1;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-info {
  flex: 1;
  padding: 30px;
  max-width: 400px;
}

.lightbox-info h3 {
  margin-bottom: 15px;
  color: #2c3e50;
  font-size: 1.5rem;
}

.lightbox-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.lightbox-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.lightbox-tech h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2c3e50;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.lightbox-actions {
  margin-top: auto;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .lightbox-body {
    flex-direction: column;
    max-height: 90vh;
  }

  .lightbox-info {
    padding: 20px;
    max-width: none;
  }

  .lightbox-image {
    padding: 10px;
  }

  .lightbox-image img {
    max-height: 300px;
  }
}
</style>
