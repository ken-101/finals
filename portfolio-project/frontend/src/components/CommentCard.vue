<template>
  <div class="comment-card">
    <div class="comment-info">
      <div class="comment"><strong>Name:&nbsp;</strong> <p>{{ comments.com_name }}</p></div>
      <div class=" create">
        <strong>Comment:&nbsp;</strong>
        <p>{{ comments.com_comment || 'No comment provided' }}</p>
      </div>
      <div class="comment"><strong>Rating:&nbsp;</strong> <p>{{ comments.com_rate }}/5 ✮</p></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  comments: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.comment-card {
  position: relative;
  border: 2px solid rgba(138, 43, 226, 0.4);
  padding: 20px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.5),
              inset 0 0 10px rgba(138, 43, 226, 0.3);
  margin-bottom: 20px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.comment-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    #ff00ff, 
    #00ffff, 
    #ff00ff, 
    #00ffff
  );
  z-index: -1;
  animation: borderGlow 3s linear infinite;
  background-size: 400% 400%;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.comment-card::after {
  content: '';
  position: absolute;
  inset: 3px;
  background: rgba(0, 0, 0, 0.8);
  z-index: -1;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

@keyframes borderGlow {
  0% { background-position: 0 0; }
  50% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}

.comment-card:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 0 30px rgba(147, 51, 234, 0.7),
              inset 0 0 20px rgba(138, 43, 226, 0.5);
}
.comment-info {
  display: flex;
  flex-direction: column;
}
/* Keep existing styles for comment-info, etc. */
.comment-info .comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-y: auto;
  margin: 5px 0;
  color: #e2e2e2;
  text-shadow: 0 0 8px rgba(147, 51, 234, 0.6);
  letter-spacing: 0.5px;
}
.create {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-height: 350px; /* Set maximum height */
}

.create p {
  flex: 1;
  overflow-x: auto;
  max-height: inherit;
  padding-right: 10px;
  margin: 0;
  /* Scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: rgba(147, 51, 234, 0.5) rgba(0, 0, 0, 0.2);
}

.create p::-webkit-scrollbar {
  width: 6px;
}

.create p::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.create p::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.5);
  border-radius: 3px;
}

.create p::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.7);
}
.comment-info strong {
  color: #ff79c6;
  text-shadow: 0 0 10px rgba(255, 121, 198, 0.7);
}
@media (min-width: 724px) {
  .comment-card {
    width: 610px;
  }
  
}
@media (max-width: 724px) {
  .comment-card {
    padding: 15px;
    
  }
  /* Keep other media query styles */
}
</style>