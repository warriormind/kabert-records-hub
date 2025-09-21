<template>
  <section id="team" class="team section animate-child">
    <div class="container section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-6">
          <div class="team-intro">
            <h3>Meet Our Exceptional Team</h3>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
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
          <div class="leadership-slider">
            <div class="swiper-wrapper">
              <div
                v-for="leader in leaders"
                :key="leader.name"
                class="swiper-slide"
                :class="{ active: currentLeader === index }"
                v-show="currentLeader === index"
              >
                <div class="leader-card">
                  <div class="leader-image">
                    <img :src="leader.image" :alt="leader.name">
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
            <div class="swiper-pagination">
              <span
                v-for="(leader, index) in leaders"
                :key="index"
                class="swiper-pagination-bullet"
                :class="{ 'swiper-pagination-bullet-active': currentLeader === index }"
                @click="currentLeader = index"
              ></span>
            </div>
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
      hoveredMember: null,
      currentLeader: 0,
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
  mounted() {
    setInterval(() => {
      this.currentLeader = (this.currentLeader + 1) % this.leaders.length
    }, 4000)
  },
  methods: {
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src)
      event.target.src = '/assets/img/logo.jpg' // fallback to logo
    }
  }
}
</script>

<style scoped>
.team {
  background: #f8f9fa;
}

.team-intro h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.team-intro p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.stats-row {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #007bff;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.member-hexagon {
  position: relative;
  cursor: pointer;
}

.hexagon-inner {
  position: relative;
  width: 150px;
  height: 130px;
  margin: 0 auto;
  background: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.member-hexagon:hover .hexagon-inner {
  transform: scale(1.05);
}

.hexagon-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
}

.member-overlay.active {
  opacity: 1;
}

.member-overlay h5 {
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.member-overlay span {
  font-size: 0.8rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.social-icons a {
  color: white;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.2);
}

.leadership-slider {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.leader-card {
  display: flex;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.leader-image {
  flex: 0 0 200px;
}

.leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.leader-info {
  flex: 1;
  padding: 2rem;
}

.leader-info h5 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.position {
  display: block;
  color: #007bff;
  font-weight: 500;
  margin-bottom: 1rem;
}

.leader-info p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.leader-contact {
  display: flex;
  gap: 0.5rem;
}

.contact-btn {
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

.contact-btn:hover {
  background: #007bff;
  color: white;
}

.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #dee2e6;
  cursor: pointer;
  transition: background 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: #007bff;
}

.join-team-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.cta-icon {
  font-size: 3rem;
  opacity: 0.8;
}

.cta-content h4 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cta-content p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #007bff;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #007bff;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .stats-row {
    flex-direction: column;
  }

  .join-team-cta {
    flex-direction: column;
    text-align: center;
  }

  .cta-actions {
    flex-direction: column;
  }

  .leader-card {
    flex-direction: column;
  }

  .leader-image {
    flex: 0 0 150px;
  }
}
</style>