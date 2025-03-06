<script setup>
import { ref, onMounted } from "vue";
import { fetchComments } from "../api";
import CommentCard from "../components/CommentCard.vue";
import CommentForm from "../components/CommentForm.vue";

const comments = ref([]);

onMounted(async () => {
  comments.value = await fetchComments();
});

const handleSubmitComment = async (commentData) => {
  // TODO: Implement API call to save comment
  console.log('New comment:', commentData);
};
</script>

<template>
  <div class="comments-container">
    <h1>Comments</h1>
    <CommentForm @submit-comment="handleSubmitComment" />
    <div class="comments-list" v-if="comments.length">
      <CommentCard v-for="comment in comments" :key="comment.id" :comments="comment" />
    </div>
    <p v-else>Loading comments...</p>
  </div>
</template>

<style scoped>
.comments-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.comments-list {
  margin: 20px 0;
}

.comment {
  background: #f8f9fa;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>