<script setup>
import { ref, onMounted } from "vue";
import { fetchComments } from "../api";
import CommentCard from "../components/CommentCard.vue";
import CommentForm from "../components/CommentForm.vue";

const comments = ref([]);

const loadComments = async () => {
  comments.value = await fetchComments();
};

onMounted(loadComments);

const handleSubmitComment = async (commentData) => {
  // Comment is already saved by the form component
  await loadComments(); // Refresh the comments list
};

const handleRefreshComments = async () => {
  await loadComments();
};
</script>

<template>
  <div class="comments-container">
    <h1>Comments</h1>
    <CommentForm 
      @submit-comment="handleSubmitComment"
      @refresh-comments="handleRefreshComments"
    />
    <div class="comments-list" v-if="comments.length">
      <CommentCard v-for="comment in comments" :key="comment.id" :comments="comment" />
    </div>
    <p v-else>Loading comments...</p>
  </div>
</template>

<style scoped>
.comments-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 340px;
  max-width: 90vw;
  margin: 100px auto 0;
  padding: 20px;
  gap: 40px;
}
@media screen and (min-width: 768px) {
  .comments-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  margin: 20px 0;
}
}
@media screen and (max-width: 768px) {
  .comments-list {
  width: 370px;
}
}


.comment {
  background: #f8f9fa;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>