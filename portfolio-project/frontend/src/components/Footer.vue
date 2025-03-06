<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Contact</h3>
        <p>Email: jljajurie@student.apc.edu.ph</p>
        <p>Location: Philippines</p>
      </div>
      <div class="footer-section">
        <h3>Social Links</h3>
        <div class="social-links">
          <a href="https://github.com/ken-101" target="_blank">GitHub</a>
          <a href="linkedin.com/in/john-kenneth-jajurie-09353b29a" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/kenneth._07" target="_blank">Instagram</a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/comments">Comments</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Kenneth Portfolio. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
    display: flex;
    margin-top: auto;
    flex-direction: column;
    background: linear-gradient(145deg, rgba(19, 19, 19, 0.9), rgba(28, 28, 28, 0.9));
    color: #ffffff;
    padding: 3rem 50px 1rem;
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 -4px 20px rgba(79, 172, 254, 0.2);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
}

.footer-section {
    background: linear-gradient(145deg, rgba(53, 21, 46, 0.9), rgba(3, 22, 82, 0.9));
    border-radius: 20px;
    padding: 10px;
    text-align: center;
}

.footer-section h3 {
  color: #4facfe;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}


.footer-section p {
  color: #e0e0e0;
  margin: 0.5rem 0;
}

.social-links {
  display: flex;justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.social-links a, .footer-section nav a{
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
}

.social-links a:hover,.footer-section nav a:hover {
  color: #ff00ff;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
}

.footer-section nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  align-items: center;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  .footer-section {
    padding: 0 1rem;
  }

  .social-links, .footer-section nav {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .social-links a, .footer-section nav a {
    font-size: 0.9rem;
  }
}
</style>