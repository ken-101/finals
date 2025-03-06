<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Navbar.vue"; // ✅ Import Navbar component

const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
});

</script>

<template>
    <div class="app-container">
      <div class="floating-images">
        <div class="floating-image" v-for="i in 10" :key="i"></div>
      </div>
      <div class="cursor-light" :style="{
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
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #000000, #3f3f3f);
}

h1,h2,h3,h4,h5,h6,p,span,a {
  color: #e2e2e2;
}

@media (min-width: 1024px) {
  .cursor-light {
    pointer-events: none;
    position: fixed;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.397) 0%, rgba(255, 255, 255, 0) 70%);
    transform: translate(-50%, -50%);
    z-index: 999;
    transition: all 100ms ease;
  }
}
</style>
