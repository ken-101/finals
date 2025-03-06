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
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.comment-info p {
  margin: 5px 0;
  color: #555;
}
</style>