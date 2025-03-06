<template>
  <div class="project-card">
    <div class="project-info">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.project-info {
  margin-bottom: 15px;
}

a {
  color: #007bff;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
}

a:hover {
  text-decoration: underline;
}
</style>
  