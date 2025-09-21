<template>
  <section id="team" class="team section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Meet Our Team</h2>
      <p>Founded in Zambia, Kabert Records Hub Limited offers a unique service model that combines traditional administrative support with advanced digital technology.</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-6">
          <div class="team-intro">
            <h3>Leadership & Expertise</h3>
            <p>Our commitment to service excellence, confidentiality, and innovation sets us apart in a rapidly evolving information economy. Our team brings together deep expertise in both traditional administrative services and cutting-edge digital solutions.</p>
            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-number">{{ teamStats.members }}</span>
                <span class="stat-label">Team Members</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ teamStats.departments }}</span>
                <span class="stat-label">Departments</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ teamStats.countries }}</span>
                <span class="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="team-grid">
            <div
              v-for="member in teamMembers"
              :key="member.name"
              class="member-hexagon"
              @mouseenter="hoveredMember = member.name"
              @mouseleave="hoveredMember = null"
            >
              <div class="hexagon-inner">
                <img :src="member.image" :alt="member.name" @error="handleImageError">
                <div class="member-overlay" :class="{ active: hoveredMember === member.name }">
                  <h5>{{ member.name }}</h5>
                  <span>{{ member.position }}</span>
                  <div class="social-icons">
                    <a v-for="social in member.social" :key="social.platform" :href="social.url" @click.stop>
                      <i :class="social.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <div class="leadership-slider swiper init-swiper">
            <script type="application/json" class="swiper-config">
              {
                "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 4000
                },
                "slidesPerView": 1,
                "spaceBetween": 0,
                "pagination": {
                  "el": ".swiper-pagination",
                  "clickable": true
                },
                "breakpoints": {
                  "768": {
                    "slidesPerView": 2
                  },
                  "1024": {
                    "slidesPerView": 3
                  }
                }
              }
            </script>
            <div class="swiper-wrapper">
              <div
                v-for="leader in leaders"
                :key="leader.name"
                class="swiper-slide"
              >
                <div class="leader-card">
                  <div class="leader-image">
                    <img :src="leader.image" :alt="leader.name" @error="handleImageError">
                  </div>
                  <div class="leader-info">
                    <h5>{{ leader.name }}</h5>
                    <span class="position">{{ leader.position }}</span>
                    <p>{{ leader.bio }}</p>
                    <div class="leader-contact">
                      <a href="#" class="contact-btn">
                        <i class="bi bi-envelope"></i>
                      </a>
                      <a :href="leader.github" class="contact-btn">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-8 offset-lg-2">
          <div class="join-team-cta">
            <div class="cta-icon">
              <i class="bi bi-rocket-takeoff"></i>
            </div>
            <div class="cta-content">
              <h4>Ready to Join Our Mission?</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
              <div class="cta-actions">
                <a href="#" class="btn btn-primary">View Open Roles</a>
                <a href="#" class="btn btn-outline">Learn Our Culture</a>
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
  name: 'Team',
  data() {
    return {
      teamStats: {
        members: 50,
        departments: 8,
        countries: 15
      },
      teamMembers: [
        {
          name: 'Gilbert Mwanza',
          position: 'Managing Director',
          image: '/assets/img/person/person-m-4.webp',
          social: [
            { platform: 'linkedin', url: '#', icon: 'bi bi-linkedin' },
            { platform: 'email', url: '#', icon: 'bi bi-envelope' }
          ]
        },
        {
          name: 'Kabeli Mupiko',
          position: 'Sales & Marketing Director',
          image: '/assets/img/person/person-f-8.webp',
          social: [
            { platform: 'linkedin', url: '#', icon: 'bi bi-linkedin' },
            { platform: 'twitter', url: '#', icon: 'bi bi-twitter' }
          ]
        },
        {
          name: 'Keegan Simutunda',
          position: 'Operations Manager',
          image: '/assets/img/person/person-m-6.webp',
          social: [
            { platform: 'github', url: '#', icon: 'bi bi-github' },
            { platform: 'linkedin', url: '#', icon: 'bi bi-linkedin' }
          ]
        },
        {
          name: 'Sage Kona Nduwa',
          position: 'IT Manager',
          image: '/assets/img/person/person-m-9.webp',
          social: [
            { platform: 'github', url: '#', icon: 'bi bi-github' },
            { platform: 'linkedin', url: '#', icon: 'bi bi-linkedin' }
          ]
        }
      ],
      leaders: [
        {
          name: 'Jennifer Walsh',
          position: 'Chief Executive Officer',
          image: '/assets/img/person/person-f-14.webp',
          bio: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id.',
          github: '#'
        },
        {
          name: 'Robert Martinez',
          position: 'Chief Technology Officer',
          image: '/assets/img/person/person-m-13.webp',
          bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.',
          github: '#'
        },
        {
          name: 'Lisa Thompson',
          position: 'Head of Operations',
          image: '/assets/img/person/person-f-5.webp',
          bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          github: '#'
        },
        {
          name: 'Alex Garcia',
          position: 'VP of Marketing',
          image: '/assets/img/person/person-m-9.webp',
          bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
          github: '#'
        }
      ]
    }
  },
  methods: {
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>
