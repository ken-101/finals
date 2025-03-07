<template>
  <div class="folder-card">
    <div class="dropdown-container">
      <button @click="toggleDropdown" class="dropdown-button">
        {{ project.name }} {{ isOpen ? '⬆' : '⬇' }}
      </button>
      <transition name="dropdown">
        <div v-if="isOpen" class="dropdown-menu">
          <ul>
            <li v-for="(item, index) in images" :key="index">
              <transition name="fade" :delay="index * 100">
                <img :src="item.src" :alt="item.alt" />
              </transition>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="folder-info">
      <p>{{ project.description }}</p>
    </div>
    <div class="folder-stats">
      <span class="stat">Size: {{ project.size || 'N/A' }}</span>
      <span class="stat">Modified: {{ project.modified || 'Unknown' }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  project: {
    type: Object,
    required: true
  }
});

const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const images = ref([
  { src: new URL('../assets/bg/star.png', import.meta.url).href, alt: 'Project Image 1' },
  { src: new URL('../assets/bg/star.png', import.meta.url).href, alt: 'Project Image 2' },
  { src: new URL('../assets/bg/star.png', import.meta.url).href, alt: 'Project Image 3' },
]);
</script>

<style scoped>
.folder-card {
  position: relative;
  border: 2px solid rgba(0, 255, 255, 0.3);
  padding: 20px;
  margin: 15px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  clip-path: polygon(
    0 10px, 
    10px 0, 
    90% 0, 
    100% 10px,
    100% 90%,
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.folder-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff, #ff00ff);
  z-index: -1;
  animation: borderFlow 3s linear infinite;
  background-size: 400% 400%;
  clip-path: inherit;
}

@keyframes borderFlow {
  0% { background-position: 0 0; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0 0; }
}

.folder-icon {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}

.folder-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
}

.folder-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.folder-info h3 {
  color: #00ffff;
  font-size: 1.2rem;
  margin-bottom: 8px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.folder-info p {
  color: #b4b4b4;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.folder-info a {
  color: #ff00ff;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 5px 15px;
  border: 1px solid #ff00ff;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.folder-info a:hover {
  background: rgba(255, 0, 255, 0.2);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
}

.folder-stats {
  margin-top: 15px;
  display: flex;
  gap: 15px;
  font-size: 0.8rem;
  color: #666;
}

.stat {
  background: rgba(0, 255, 255, 0.1);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.dropdown-container {
  margin-bottom: 20px;
}

.dropdown-button {
  width: 100%;
  padding: 10px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  border: none;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
  border-radius: 5px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.dropdown-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.dropdown-menu {
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 5px;
  overflow: hidden;
  max-width: 100%;
}

.dropdown-menu ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}

.dropdown-menu li {
  margin: 10px 0;
}

.dropdown-menu img {
  width: auto;
  height: 50px;
  border-radius: 3px;
  transition: transform 0.3s ease;
  object-fit: contain;
  filter: drop-shadow(0 0 2px black) contrast(100%) invert(1);
}

.dropdown-menu img:hover {
  transform: scale(1.05);
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
  