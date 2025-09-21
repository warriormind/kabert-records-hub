import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Component instance:', instance)
  console.error('Error info:', info)
}

// Global warning handler
app.config.warnHandler = (msg, instance, trace) => {
  console.warn('Global warning:', msg)
  if (instance) console.warn('Component instance:', instance)
  if (trace) console.warn('Trace:', trace)
}

app.mount('#app')

// Initialize AOS
import AOS from 'aos'
AOS.init()

// Initialize Swiper
import Swiper from 'swiper'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
Swiper.use([Autoplay, Pagination, Navigation, EffectFade])

// Initialize GLightbox
import GLightbox from 'glightbox'
GLightbox()

// Initialize PureCounter
import PureCounter from '@srexi/purecounterjs'
new PureCounter()