<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue"; // ✅ Import Navbar component
</script>

<template>
    <div>
        <!-- Navigation Bar -->
            <Navbar />

            <!-- Main Content -->
            <router-view />
    </div>
</template>

<style>
/* Add global styles here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
}
</style>
