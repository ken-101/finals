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



body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #0b5586, #7bc5f0);
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
