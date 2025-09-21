<template>
  <section id="contact" class="contact section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row align-items-center">
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
          <div class="contact-form-card">
            <div class="form-header">
              <div class="header-icon">
                <i class="bi bi-chat-dots-fill"></i>
              </div>
              <h3>Let's Start a Conversation</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p>
            </div>

            <form @submit.prevent="submitForm" class="php-email-form">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input v-model="form.name" type="text" class="form-control" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 mb-3">
                  <input v-model="form.email" type="email" class="form-control" name="email" placeholder="Email Address" required>
                </div>
              </div>

              <div class="mb-3">
                <input v-model="form.subject" type="text" class="form-control" name="subject" placeholder="What's this about?" required>
              </div>

              <div class="mb-4">
                <textarea v-model="form.message" class="form-control" name="message" rows="4" placeholder="Tell us more about your project..." required></textarea>
              </div>

              <div class="my-3">
                <div v-if="loading" class="loading">Loading</div>
                <div v-if="error" class="error-message">{{ error }}</div>
                <div v-if="sent" class="sent-message">Your message has been sent. Thank you!</div>
              </div>

              <button type="submit" class="submit-btn" :disabled="loading">
                <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
                <i class="bi bi-send-fill"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="col-lg-7" data-aos="fade-left" data-aos-delay="200">
          <div class="contact-info-area">
            <div class="info-header">
              <h3>Ready to Transform Your Ideas?</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.</p>
            </div>

            <div class="contact-methods">
              <div class="method-card">
                <div class="card-icon">
                  <i class="bi bi-envelope-at"></i>
                </div>
                <div class="card-content">
                  <h5>Email Us</h5>
                  <p>kabertrecordshub@gmail.com</p>
                  <span class="response-time">Response in 2-4 hours</span>
                </div>
              </div>

              <div class="method-card">
                <div class="card-icon">
                  <i class="bi bi-telephone"></i>
                </div>
                <div class="card-content">
                  <h5>Call Us</h5>
                  <p>+1 (555) 987-6543</p>
                  <span class="response-time">Available 9AM - 6PM EST</span>
                </div>
              </div>

              <div class="method-card">
                <div class="card-icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="card-content">
                  <h5>Visit Our Office</h5>
                  <p>Lusaka, Zambia</p>
                  <span class="response-time">Open Monday - Friday</span>
                </div>
              </div>
            </div>

            <div class="additional-info">
              <div class="info-stats">
                <div class="stat-item">
                  <div class="stat-number">24h</div>
                  <div class="stat-label">Average Response</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">98%</div>
                  <div class="stat-label">Client Satisfaction</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">150+</div>
                  <div class="stat-label">Projects Delivered</div>
                </div>
              </div>

              <div class="social-connect">
                <h6>Connect With Us</h6>
                <div class="social-links">
                  <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-twitter-x"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-github"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-discord"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      loading: false,
      error: '',
      sent: false
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      this.error = ''
      this.sent = false

      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        this.sent = true
        this.form = { name: '', email: '', subject: '', message: '' }
      } catch (err) {
        this.error = 'Failed to send message. Please try again.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
