<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';

const comment = ref('');
const author = ref('');
const rating = ref(5); // Initialize with default value of 5
const loading = ref(false);
const error = ref('');

const emit = defineEmits(['submit-comment']);

const submitComment = async () => {
  if (comment.value.trim() && author.value.trim()) {
    loading.value = true;
    error.value = '';
    
    try {
      const { data, error: supabaseError } = await supabase
        .from('comments')
        .insert([
          {
            com_name: author.value,
            com_comment: comment.value,
            com_rate: Number(rating.value)
          }
        ]);

      if (supabaseError) throw supabaseError;

      emit('submit-comment', {
        com_name: author.value,
        com_comment: comment.value,
        com_rate: Number(rating.value)
      });
      
      comment.value = '';
      author.value = '';
      rating.value = 5;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }
};
</script>

<template>
  <div>
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <input
        type="text"
        v-model="author"
        placeholder="Your name"
        required
      />
      <textarea
        v-model="comment"
        placeholder="Write your comment..."
        required
      ></textarea>
      <div class="rating-input">
        <label for="rating">Rating:</label>
        <select
          id="rating"
          v-model="rating"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" :disabled="loading">{{ loading ? 'Submitting...' : 'Submit' }}</button>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
input, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.rating-input {
  margin-bottom: 10px;
}

.rating-input label {
  display: block;
  margin-bottom: 5px;
}

.rating-input select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
textarea {
  height: 100px;
  resize: vertical;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
