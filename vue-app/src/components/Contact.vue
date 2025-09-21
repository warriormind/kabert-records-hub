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

<style scoped>
.contact {
  background: white;
}

.contact-form-card {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.header-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.form-header p {
  color: #6c757d;
  margin-bottom: 0;
}

.form-control {
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.submit-btn {
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading,
.error-message,
.sent-message {
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.loading {
  background: #e9ecef;
  color: #6c757d;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
}

.sent-message {
  background: #d4edda;
  color: #155724;
}

.contact-info-area h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.contact-info-area > p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.method-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.method-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.card-content h5 {
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #2c3e50;
}

.card-content p {
  margin-bottom: 0.3rem;
  color: #495057;
}

.response-time {
  font-size: 0.8rem;
  color: #6c757d;
}

.additional-info {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.info-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  text-align: center;
}

.stat-item .stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
}

.stat-item .stat-label {
  font-size: 0.8rem;
  color: #6c757d;
}

.social-connect h6 {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  color: #6c757d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #007bff;
  color: white;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .contact .row {
    flex-direction: column;
  }

  .info-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>