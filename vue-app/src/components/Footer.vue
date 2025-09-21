<template>
  <footer id="footer" class="footer position-relative dark-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Kabert Records Hub</span>
          </a>
          <div class="footer-contact pt-3">
            <p>Kabert Records Hub Limited</p>
            <p>Lusaka, Zambia</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+260 211 123456</span></p>
            <p><strong>Email:</strong> <span>kabertrecordshub@gmail.com</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#hero" @click="scrollToSection('hero')">Home</a></li>
            <li><a href="#about" @click="scrollToSection('about')">About us</a></li>
            <li><a href="#services" @click="scrollToSection('services')">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Hic solutasetp</h4>
          <ul>
            <li><a href="#">Molestiae accusamus iure</a></li>
            <li><a href="#">Excepturi dignissimos</a></li>
            <li><a href="#">Suscipit distinctio</a></li>
            <li><a href="#">Dilecta</a></li>
            <li><a href="#">Sit quas consectetur</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Nobis illum</h4>
          <ul>
            <li><a href="#">Ipsam</a></li>
            <li><a href="#">Laudantium dolorum</a></li>
            <li><a href="#">Dinera</a></li>
            <li><a href="#">Trodelas</a></li>
            <li><a href="#">Flexo</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Kabert Records Hub Limited</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        Designed by <strong>Dominic The Code Father</strong>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 0 20px;
}

.footer-top {
  padding-bottom: 40px;
}

.footer-about .logo {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-contact p {
  margin-bottom: 0.5rem;
  color: #bdc3c7;
}

.footer-contact strong {
  color: white;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #007bff;
  transform: translateY(-3px);
}

.footer-links h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #007bff;
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.copyright p {
  margin-bottom: 0.5rem;
  color: #bdc3c7;
}

.copyright .sitename {
  color: #007bff;
}

.credits {
  font-size: 0.9rem;
  color: #95a5a6;
}

@media (max-width: 768px) {
  .footer-top .row {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>