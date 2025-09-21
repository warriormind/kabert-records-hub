<template>
  <div id="app">
    <Header />
    <main class="main">
      <Hero />
      <About />
      <Services />
      <Partners />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Team />
      <Contact />
    </main>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Partners from './components/Partners.vue'
import Portfolio from './components/Portfolio.vue'
import WhyUs from './components/WhyUs.vue'
import Testimonials from './components/Testimonials.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollTop from './components/ScrollTop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Services,
    Partners,
    Portfolio,
    WhyUs,
    Testimonials,
    Team,
    Contact,
    Footer,
    ScrollTop
  }
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
}

.main {
  overflow-x: hidden;
}

.section {
  padding: 80px 0;
}

.animate-child {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.animate-child.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>