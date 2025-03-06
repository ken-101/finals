<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
const mouseX = ref(0);
const mouseY = ref(0);
const isClicked = ref(false);

const updateMousePosition = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const handleClick = () => {
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 500); // Reset after animation completes
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
  window.addEventListener('click', handleClick);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
  window.removeEventListener('click', handleClick);
});

</script>

<template>
    <div class="app-container">
      <div class="cursor-light" :class="{ 'clicked': isClicked }" :style="{left: mouseX + 'px',top: mouseY + 'px'}"></div> 

        <!-- Navigation Bar -->
        <Navbar />

        <!-- Main Content -->
        <router-view />

        <!-- Footer -->
        
    </div>
    <Footer />
</template>

<style>
/* Add global styles here */
#app{
  display: flex;
  flex-direction: column;
}
.app-container {
  position: relative;

  overflow: hidden;
}

body {
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom, #000000, #3f3f3f);
}

h1,h2,h3,h4,h5,h6,p,span,a {
  color: #e2e2e2;
}
/* mobile view */
@media (max-width: 724px) {


}
/* desktop view */
@media (min-width: 724px) {
  .cursor-light {
    z-index: 3000;
    pointer-events: none;
    position: fixed;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(208, 56, 255, 0.397) 0%, rgba(255, 255, 255, 0) 70%);
    transform: translate(-50%, -50%);
    z-index: 999;
    transition: all 100ms ease;
  }
  
  .cursor-light.clicked {
    animation: pulse 0.5s ease;
  }
  
  @keyframes pulse {
    0% {
      width: 150px;
      height: 150px;
    }
    50% {
      width: 50px;
      height: 50px;
      background: radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
    }
    100% {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
