<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="#hero" class="logo d-flex align-items-center me-auto me-xl-0" @click="scrollToSection('hero')">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.webp" alt=""> -->
        <h1 class="sitename">Kabert Records Hub</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" :class="{ active: activeSection === 'hero' }" @click="scrollToSection('hero')">Home</a></li>
          <li><a href="#about" :class="{ active: activeSection === 'about' }" @click="scrollToSection('about')">About</a></li>
          <li><a href="#services" :class="{ active: activeSection === 'services' }" @click="scrollToSection('services')">Services</a></li>
          <li><a href="#partners" :class="{ active: activeSection === 'partners' }" @click="scrollToSection('partners')">Partners</a></li>
          <li><a href="#portfolio" :class="{ active: activeSection === 'portfolio' }" @click="scrollToSection('portfolio')">Portfolio</a></li>
          <li><a href="#team" :class="{ active: activeSection === 'team' }" @click="scrollToSection('team')">Team</a></li>
          <li class="dropdown">
            <a href="#"><span>Industries</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#services" @click="scrollToSection('services')">Government & Public Sector</a></li>
              <li><a href="#services" @click="scrollToSection('services')">NGOs & Donor Organizations</a></li>
              <li><a href="#services" @click="scrollToSection('services')">Private Sector & SMEs</a></li>
              <li class="dropdown">
                <a href="#"><span>Educational Institutions</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#services" @click="scrollToSection('services')">Universities</a></li>
                  <li><a href="#services" @click="scrollToSection('services')">Colleges & Schools</a></li>
                  <li><a href="#services" @click="scrollToSection('services')">Research Institutions</a></li>
                  <li><a href="#services" @click="scrollToSection('services')">Training Centers</a></li>
                  <li><a href="#services" @click="scrollToSection('services')">Libraries</a></li>
                </ul>
              </li>
              <li><a href="#services" @click="scrollToSection('services')">Healthcare Organizations</a></li>
              <li><a href="#services" @click="scrollToSection('services')">Financial Services</a></li>
              <li><a href="#services" @click="scrollToSection('services')">Mining & Resources</a></li>
            </ul>
          </li>
          <li><a href="#contact" :class="{ active: activeSection === 'contact' }" @click="scrollToSection('contact')">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list" @click="toggleMobileNav"></i>
      </nav>

      <a class="btn-getstarted" href="#about" @click="scrollToSection('about')">Get Started</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeSection: 'hero',
      mobileNavOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleScroll() {
      const sections = ['hero', 'about', 'services', 'partners', 'portfolio', 'team', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            this.activeSection = section
            break
          }
        }
      }
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen
      const navmenu = document.getElementById('navmenu')
      if (navmenu) {
        navmenu.classList.toggle('mobile-nav-active')
      }
    },
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      // For logo, we can hide it or show a text fallback
      event.target.style.display = 'none'
    }
  }
}
</script>
