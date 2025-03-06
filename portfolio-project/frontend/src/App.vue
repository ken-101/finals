<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Navbar.vue"; // ✅ Import Navbar component

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
      
      <div class="cursor-light" :class="{ 'clicked': isClicked }" :style="{
        left: mouseX + 'px',
        top: mouseY + 'px'
      }"></div> 
        <!-- Navigation Bar -->
            <Navbar />

            <!-- Main Content -->
            <router-view />
    </div>
    
</template>

<style>
/* Add global styles here */
.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.floating-images {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.floating-image {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(2px);
  animation: float 15s linear infinite;
}

.floating-image:nth-child(2n) {
  animation-duration: 20s;
  width: 70px;
  height: 70px;
}

.floating-image:nth-child(3n) {
  animation-duration: 25s;
  width: 40px;
  height: 40px;
}

.floating-image:nth-child(4n) {
  animation-duration: 30s;
  width: 60px;
  height: 60px;
}

@keyframes float {
  0% {
    transform: translate(-100%, random(100) + '%');
  }
  100% {
    transform: translate(100vw, random(100) + '%');
  }
}

body {
  font-family: Arial, sans-serif;
  padding-bottom: 10%;
  background: linear-gradient(to bottom, #000000, #3f3f3f);
}

h1,h2,h3,h4,h5,h6,p,span,a {
  color: #e2e2e2;
}

@media (min-width: 1024px) {
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
