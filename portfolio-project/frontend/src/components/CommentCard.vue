<template>
  <div class="comment-card">
    <div class="comment-info">
      <p><strong>Name:</strong> {{ comments.com_name }}</p>
      <p><strong>Comment:</strong> {{ comments.com_comment || 'No comment provided' }}</p>
      <p><strong>Rating:</strong> {{ comments.com_rate }}/5</p>
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
  border: 1px solid rgba(138, 43, 226, 0.4);
  padding: 15px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.5),
              inset 0 0 10px rgba(138, 43, 226, 0.3);
  margin-bottom: 20px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.comment-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(147, 51, 234, 0.7),
              inset 0 0 15px rgba(138, 43, 226, 0.5);
  border-color: rgba(138, 43, 226, 0.8);
}

.comment-info p {
  margin: 5px 0;
  color: #e2e2e2;
  text-shadow: 0 0 8px rgba(147, 51, 234, 0.6);
  letter-spacing: 0.5px;
}

.comment-info p strong {
  color: #ff79c6;
  text-shadow: 0 0 10px rgba(255, 121, 198, 0.7);
}
</style>