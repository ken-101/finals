<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';

const comment = ref('');
const author = ref('');
const rating = ref(5); // Initialize with default value of 5
const loading = ref(false);
const error = ref('');

const emit = defineEmits(['submit-comment', 'refresh-comments']);

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
      
      // Emit refresh event to trigger comments reload
      emit('refresh-comments');
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }
};
</script>

<template>
  <div class="comment-form">
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <input type="text" v-model="author" class="fontform" placeholder="Your name" required/>
      <textarea v-model="comment" class="fontform" placeholder="Write your comment..." required
      ></textarea>
      <div class="rating-input">
        <label for="rating">Rating:</label>
        <select id="rating" v-model="rating" required >
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
@media screen and (min-width: 768px) {
  .comment-form {
    width: 800px;
  }
}
@media screen and (max-width: 768px) {
  .comment-form {
    width: 350px;
  }
}
.comment-form {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.4);
  backdrop-filter: blur(5px);
}

h2 {
  color: #ff79c6;
  text-shadow: 0 0 10px rgba(255, 121, 198, 0.7);
  margin-bottom: 20px;
}

input, textarea, select {
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(147, 51, 234, 0.5);
  border-radius: 6px;
  color: #e2e2e2;
  transition: all 0.3s ease;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #ff79c6;
  box-shadow: 0 0 15px rgba(255, 121, 198, 0.5);
}

textarea {
  height: 100px;
  resize: vertical;
}
.rating-input{
  width: 250px;
  height: 120px;
}
#rating{
  height: 50px;
  
  background-color: #000000;
  color: #ffffff;
}
.fontform{
  font-size: 17px;
}
.rating-input label {
  color: #e2e2e2;
  text-shadow: 0 0 8px rgba(147, 51, 234, 0.6);
  margin-bottom: 8px;
  display: block;
}

button {
  background: linear-gradient(45deg, #9333ea, #ff79c6);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(147, 51, 234, 0.7);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #ff5555;
  text-shadow: 0 0 8px rgba(255, 85, 85, 0.7);
  margin-top: 10px;
}
</style>
