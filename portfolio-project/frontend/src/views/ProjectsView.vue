<script setup>
import { ref, onMounted } from "vue";
import FolderCard from "../components/FolderCard.vue";

const projects = ref([]);

onMounted(async () => {
  projects.value = [
    {
      id: 1,
      name: "System_Core",
      description: "Main system architecture and components",
      link: "https://project1.example.com",
      icon: "./assets/bg/star.png",
      size: "1.2 GB",
      modified: "2024-03-15"
    },
    {
      id: 2,
      name: "Neural_Network",
      description: "AI processing units and algorithms",
      link: "https://project2.example.com",
      icon: "./assets/icons/folder-neon.png",
      size: "842 MB",
      modified: "2024-03-14"
    }
  ];
});
</script>

<template>
  <div class="projects-container">
    <div class="header">
      <h1>SYSTEM DIRECTORIES</h1>
      <div class="scan-line"></div>
    </div>
    <div class="folders-grid" v-if="projects.length">
      <FolderCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <div class="loading" v-else>
      <p>SCANNING DIRECTORIES...</p>
      <div class="loading-bar"></div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  padding: 20px;
  background: linear-gradient(135deg, #000000, #1a1a1a);
  min-height: 100vh;
}

.header {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 255, 255, 0.3);
}

.header h1 {
  color: #00ffff;
  font-size: 2.5rem;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  letter-spacing: 3px;
  margin: 0;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.folders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.loading {
  text-align: center;
  color: #00ffff;
}

.loading p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(0, 255, 255, 0.2);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.loading-bar::after {
  content: '';
  position: absolute;
  width: 40%;
  height: 100%;
  background: #00ffff;
  animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }

  .folders-grid {
    grid-template-columns: 1fr;
  }
}
</style>
