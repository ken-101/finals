import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import Vue Router

// Import global styles (optional)
import "./assets/style.css";

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount("#app"); // Mount Vue app to the DOM
