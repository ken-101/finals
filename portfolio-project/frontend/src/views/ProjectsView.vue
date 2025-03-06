<script setup>
import { ref, onMounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref([]);

onMounted(async () => {
  // Example project data - replace with actual API call
  projects.value = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of project 1",
      link: "https://project1.example.com"
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of project 2",
      link: "https://project2.example.com"
    }
  ];
});
</script>

<template>
  <div>
    <h1>My Projects</h1>
    <div v-if="projects.length">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <p v-else>Loading projects...</p>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
}
</style>
