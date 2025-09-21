<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="#hero" class="logo d-flex align-items-center me-auto me-xl-0" @click="scrollToSection('hero')">
        <img src="/assets/img/logo.jpg" alt="Kabert Records Hub Logo" @error="handleImageError">
        <div class="company-info">
          <h1 class="sitename">Kabert Records Hub</h1>
          <span class="company-tagline">Business Solutions Provider</span>
        </div>
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
            <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown">
                <a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
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

<style scoped>
/* Header styles */
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.logo {
  text-decoration: none;
  color: #333;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.sitename {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #2c3e50;
}

.company-tagline {
  font-size: 0.8rem;
  color: #7f8c8d;
  display: block;
}

.navmenu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navmenu a {
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  transition: color 0.3s;
}

.navmenu a.active,
.navmenu a:hover {
  color: #007bff;
}

.btn-getstarted {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.btn-getstarted:hover {
  transform: translateY(-2px);
  color: white;
}

/* Mobile nav */
.mobile-nav-toggle {
  display: none;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navmenu {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 300px;
    height: calc(100vh - 70px);
    background: white;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  }

  .navmenu.mobile-nav-active {
    right: 0;
  }

  .navmenu ul {
    flex-direction: column;
    padding: 20px;
  }
}
</style>