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

            <form @submit.prevent="submitForm" class="php-email-form" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Your Name"
                    required
                    @blur="validateField('name')"
                    @input="clearError('name')"
                  >
                  <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    name="email"
                    placeholder="Email Address"
                    required
                    @blur="validateField('email')"
                    @input="clearError('email')"
                  >
                  <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                </div>
              </div>

              <div class="mb-3">
                <select
                  v-model="form.service"
                  class="form-control"
                  :class="{ 'is-invalid': errors.service }"
                  @blur="validateField('service')"
                  @change="clearError('service')"
                >
                  <option value="">Select Service</option>
                  <option value="records-management">Records Management</option>
                  <option value="software-development">Software Development</option>
                  <option value="it-consultancy">IT Consultancy</option>
                  <option value="data-processing">Data Processing</option>
                  <option value="other">Other</option>
                </select>
                <div v-if="errors.service" class="invalid-feedback">{{ errors.service }}</div>
              </div>

              <div class="mb-3">
                <input
                  v-model="form.subject"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors.subject }"
                  name="subject"
                  placeholder="Project Title or Subject"
                  required
                  @blur="validateField('subject')"
                  @input="clearError('subject')"
                >
                <div v-if="errors.subject" class="invalid-feedback">{{ errors.subject }}</div>
              </div>

              <div class="mb-3">
                <textarea
                  v-model="form.message"
                  class="form-control"
                  :class="{ 'is-invalid': errors.message }"
                  name="message"
                  rows="4"
                  placeholder="Tell us more about your project requirements, timeline, and budget..."
                  required
                  @blur="validateField('message')"
                  @input="clearError('message')"
                ></textarea>
                <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
              </div>

              <!-- File Upload Section -->
              <div class="mb-3">
                <label for="file-upload" class="form-label file-upload-label">
                  <i class="bi bi-paperclip"></i>
                  Attach Files (optional)
                  <span class="file-info">Max 10MB per file. PDF, DOC, DOCX, JPG, PNG accepted.</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  class="form-control file-input"
                  :class="{ 'is-invalid': errors.files }"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  @change="handleFileUpload"
                  ref="fileInput"
                >
                <div v-if="errors.files" class="invalid-feedback">{{ errors.files }}</div>
                <div v-if="uploadedFiles.length > 0" class="uploaded-files mt-2">
                  <div v-for="(file, index) in uploadedFiles" :key="index" class="uploaded-file">
                    <i class="bi bi-file-earmark"></i>
                    <span>{{ file.name }}</span>
                    <span class="file-size">({{ formatFileSize(file.size) }})</span>
                    <button type="button" @click="removeFile(index)" class="btn-remove-file" aria-label="Remove file">
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Budget Range -->
              <div class="mb-3">
                <label class="form-label">Project Budget Range (optional)</label>
                <select v-model="form.budget" class="form-control">
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>

              <!-- Timeline -->
              <div class="mb-4">
                <label class="form-label">Preferred Timeline (optional)</label>
                <select v-model="form.timeline" class="form-control">
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div class="my-3">
                <div v-if="loading" class="loading">
                  <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                  Sending your message...
                </div>
                <div v-if="error" class="error-message">
                  <i class="bi bi-exclamation-triangle"></i>
                  {{ error }}
                </div>
                <div v-if="sent" class="sent-message">
                  <i class="bi bi-check-circle"></i>
                  Your message has been sent successfully! We'll get back to you within 24 hours.
                </div>
              </div>

              <button type="submit" class="submit-btn" :disabled="loading || !isFormValid">
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
        service: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      },
      uploadedFiles: [],
      errors: {},
      loading: false,
      error: '',
      sent: false,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      allowedTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
    }
  },
  computed: {
    isFormValid() {
      return this.form.name &&
             this.form.email &&
             this.form.service &&
             this.form.subject &&
             this.form.message &&
             Object.keys(this.errors).length === 0
    }
  },
  methods: {
    validateField(field) {
      const value = this.form[field]
      this.errors[field] = ''

      switch (field) {
        case 'name':
          if (!value.trim()) {
            this.errors[field] = 'Name is required'
          } else if (value.trim().length < 2) {
            this.errors[field] = 'Name must be at least 2 characters'
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!value.trim()) {
            this.errors[field] = 'Email is required'
          } else if (!emailRegex.test(value)) {
            this.errors[field] = 'Please enter a valid email address'
          }
          break
        case 'service':
          if (!value) {
            this.errors[field] = 'Please select a service'
          }
          break
        case 'subject':
          if (!value.trim()) {
            this.errors[field] = 'Subject is required'
          } else if (value.trim().length < 5) {
            this.errors[field] = 'Subject must be at least 5 characters'
          }
          break
        case 'message':
          if (!value.trim()) {
            this.errors[field] = 'Message is required'
          } else if (value.trim().length < 10) {
            this.errors[field] = 'Message must be at least 10 characters'
          }
          break
      }
    },
    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field]
      }
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files)
      this.errors.files = ''

      // Validate files
      for (const file of files) {
        if (file.size > this.maxFileSize) {
          this.errors.files = `File "${file.name}" is too large. Maximum size is 10MB.`
          return
        }
        if (!this.allowedTypes.includes(file.type)) {
          this.errors.files = `File type not allowed for "${file.name}". Please use PDF, DOC, DOCX, JPG, or PNG files.`
          return
        }
      }

      // Add valid files
      this.uploadedFiles.push(...files)

      // Clear the input
      this.$refs.fileInput.value = ''
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1)
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    async submitForm() {
      // Validate all fields before submission
      Object.keys(this.form).forEach(field => {
        if (this.form[field] !== undefined) {
          this.validateField(field)
        }
      })

      if (!this.isFormValid) {
        this.error = 'Please correct the errors above and try again.'
        return
      }

      this.loading = true
      this.error = ''
      this.sent = false

      try {
        // Prepare form data
        const formData = new FormData()

        // Add form fields
        Object.keys(this.form).forEach(key => {
          if (this.form[key]) {
            formData.append(key, this.form[key])
          }
        })

        // Add files
        this.uploadedFiles.forEach((file, index) => {
          formData.append(`file_${index}`, file)
        })

        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 3000))

        // Simulate success
        this.sent = true
        this.resetForm()

        // Clear files after successful submission
        this.uploadedFiles = []

      } catch (err) {
        this.error = 'Failed to send message. Please try again or contact us directly.'
        console.error('Form submission error:', err)
      } finally {
        this.loading = false
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        service: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      }
      this.errors = {}
      this.uploadedFiles = []
    }
  }
}
</script>

<style scoped>
/* File Upload Styles */
.file-upload-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  color: var(--heading-color);
  margin-bottom: 8px;
}

.file-upload-label i {
  color: var(--accent-color);
  font-size: 1.1rem;
}

.file-info {
  font-size: 0.85rem;
  color: #6c757d;
  font-weight: normal;
}

.file-input {
  display: none;
}

.uploaded-files {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 12px;
  background: #f8f9fa;
}

.uploaded-file {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  border: 1px solid #e9ecef;
}

.uploaded-file:last-child {
  margin-bottom: 0;
}

.uploaded-file i {
  color: var(--accent-color);
  font-size: 1.1rem;
}

.uploaded-file span {
  flex: 1;
  font-size: 0.9rem;
  color: var(--heading-color);
}

.file-size {
  color: #6c757d;
  font-size: 0.8rem;
}

.btn-remove-file {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn-remove-file:hover {
  background: #dc3545;
  color: white;
}

/* Form Validation Styles */
.form-control.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 4px;
}

/* Enhanced Loading State */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--accent-color);
  font-weight: 500;
}

/* Success/Error Messages */
.sent-message,
.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  margin-bottom: 16px;
}

.sent-message {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.sent-message i,
.error-message i {
  font-size: 1.1rem;
}

/* Submit Button Enhancement */
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn:disabled:hover {
  transform: none;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .uploaded-file {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .file-upload-label {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .file-info {
    font-size: 0.8rem;
  }
}
</style>
