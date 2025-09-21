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
