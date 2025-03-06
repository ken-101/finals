<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav>
    <div class="nav-bar">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/imgs/logo.png" alt="Logo">
        </router-link>
      </div>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </div>
    <div class="nav-links" :class="{ 'active': isMenuOpen }">
      <router-link to="/" @click="toggleMenu"><img src="../assets/imgs/home.png" alt="info" class="info-icon"> Home</router-link>
      <router-link to="/projects" @click="toggleMenu"><img src="../assets/imgs/project.png" alt="info" class="info-icon"> Projects</router-link>
      <router-link to="/comments" @click="toggleMenu"><img src="../assets/imgs/feedback.png" alt="info" class="info-icon"> Comments</router-link>
      <router-link to="/about" @click="toggleMenu"><img src="../assets/imgs/info.png" alt="info" class="info-icon"> About</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  height: 80px;
  background: #00285300;
  justify-content: center;
  padding: 0px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 1000;
}
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}
.logo{
  display: none;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  
}
a{
  text-decoration: none;
}
.info-icon {
  width: 30px;
  vertical-align: middle;
  margin: 0 10px;
  filter: drop-shadow(0 0 2px black) contrast(150%) invert(1);
  transition: transform 0.3s ease;
}

@media screen and (max-width: 768px) {
  .nav-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .logo {
    display: block;
  }

  .logo img {
    width: 40px;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    z-index: 1001;
    padding: 10px;
  }

  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
    transition: 0.3s;
  }

  .nav-links {
    display: flex;
    visibility: hidden;
    opacity: 0;
    height: 100vh;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, #002853a2, #39c0ffa6);
    backdrop-filter: blur(10px);
    font-size: 20px;
    padding: 80px 20px;
    font-weight: bold;
    gap: 35px;
    transition: visibility 0s linear 0.3s, opacity 0.3s ease;
  }

  .nav-links.active {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }

  .nav-links a {
    border-bottom: 1px solid rgb(197, 197, 197);
    border-radius: 50px;
    font-family: Arial, sans-serif;
    padding: 15px 25px;
    width: 80%;
    justify-content: center;
  }
}
@media screen and (min-width: 788px) {
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.3s;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  gap: 30px;
  position: relative;
  background: linear-gradient(45deg, #39c0ff, #ff00ff);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 15px rgba(57, 192, 255, 0.8), 
              0 0 30px rgba(255, 0, 255, 0.6);
  animation: neonGlow 2s infinite alternate;
}
.nav-links a {
  display: flex;
  align-items: center;
  color: rgb(230, 230, 230);
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav-links a:hover {
  color: #39c0ff;
  text-decoration: none;
}

.nav-links a:hover .info-icon {
  transform: scale(1.1);
}
}
</style>
