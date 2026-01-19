<template>
  <div
    style="background-color: #f9f9f9; padding: 20px; margin-top: 10%; margin-bottom: 10%"
    class="form-container"
  >
    <h2 style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px">
      Edit Post
    </h2>
    <form @submit.prevent="editPost">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          v-model="title"
          type="text"
          id="title"
          required
          class="form-input"
          placeholder="Enter post title"
        />
      </div>
      <div class="form-group">
        <label for="content">Content:</label>
        <textarea
          id="content"
          v-model="content"
          required
          class="form-textarea"
          placeholder="Write your post content here..."
        ></textarea>
      </div>
      <button type="submit" class="form-button">Edit Post</button>
    </form>
  </div>
</template>

<script setup>
import { db } from '@/firebase/config'
import router from '@/router'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { ref } from 'vue'

const title = ref('')
const content = ref('')
const postId = ref('')

postId.value = router.currentRoute.value.params.id

const editPost = async () => {
  await updateDoc(doc(db, 'posts', postId.value), {
    title: title.value,
    content: content.value,
    updatedAt: serverTimestamp(),
  })
  router.push('/blog')
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-textarea {
  height: 150px;
}

.form-button {
  width: 100%;
  padding: 10px;
  background-color: #1ad1ffc0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #217388;
}
</style>
