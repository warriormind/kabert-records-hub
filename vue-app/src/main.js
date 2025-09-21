import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

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