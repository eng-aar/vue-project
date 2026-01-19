<script setup>
import { ref, onMounted } from 'vue'
import { signOut } from 'firebase/auth'
import { auth, db } from '@/firebase/config'
import { useRouter } from 'vue-router'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'

const router = useRouter()

const posts = ref([])

const fetchPosts = () => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  // const snapShot = await getDocs(q)
  onSnapshot(q, (snapshot) => {
    posts.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    console.log(posts.value)
  })
}

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}
const deletePost = async (id) => {
  const confirm = window.confirm('Are you sure you want to delete this post ?')
  if (!confirm) return
  await deleteDoc(doc(db, 'posts', id))
  fetchPosts()
}
const editPost = (id) => {
  router.push(`/edit/${id}`)
}
// Listen for authentication state changes
onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12">
<!--nav-->
    <nav
      class="bg-neutral-primary fixed w-full z-20 top-0 left-0 border-b border-default shadow-sm"
    >
      <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <!-- Logo / Home -->
        <router-link
          to="/home"
          class="text-indigo-600 text-3xl font-bold hover:text-indigo-800 transition-colors duration-300"
        >
          Home
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center space-x-6">
          <router-link
            to="/create"
            class="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 active:scale-95 transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12.5V1.003S3.5.5 4 .5h11s.5.002.5.502v13s0 1.498-1.5 1.498H2s-1.5.002-1.5-1.998v-7.5S.5 5.5 1 5.5h1m4.5-2H9m-2.5 2h6m-6 2h6m-6 2h6m-6 2h6"
                stroke="#60A5FA"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Create Post
          </router-link>
          <div class="px-4 py-3 text-sm border-b border-default">
            <span class="">Welcome</span>
            <span class="block text-body truncate">{{ auth?.currentUser?.email }}</span>
          </div>
          <button
            @click="logout"
            class="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 active:scale-95 transition"
          >
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.083.379a.5.5 0 0 1 .945 0l1.782 5.193a.5.5 0 0 0 .473.338h5.703a.5.5 0 0 1 .284.912l-4.567 3.143a.5.5 0 0 0-.19.574l1.755 5.118a.5.5 0 0 1-.756.574l-4.673-3.216a.5.5 0 0 0-.567 0L4.6 16.23a.5.5 0 0 1-.756-.574l1.755-5.118a.5.5 0 0 0-.19-.574L.841 6.822a.5.5 0 0 1 .284-.912h5.704a.5.5 0 0 0 .473-.338z"
                fill="#FF532E"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
<!--header-->
    <div class="mt-20">
      <header class="container mx-auto px-6 mt-28 mb-8 text-center">
        <h1 class="text-5xl font-extrabold text-gray-800 tracking-tight">Our Blog</h1>
        <p class="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover insights, stories, and inspiration from our community.
        </p>
      </header>
    </div>

    <!-- posts -->
    <main class="container mx-auto px-6 flex flex-wrap gap-4 justify-center">
      <div v-for="post in posts" :key="post.id" class="card">
        <div class="mac-header">
          <span class="red"></span>
          <span class="yellow"></span>
          <span class="green"></span>
        </div>
        <h2 class="card-title">{{ post.title }}</h2>
        <p class="card-description">
          {{ post.email }} | {{ post.createdAt.toDate().toLocaleDateString() }}
        </p>
        <div class="code-editor">
          <pre><code>{{ post.content }}</code></pre>
        </div>
        <div class="flex gap-2 mt-2">
          <button
            v-if="auth?.currentUser?.email === post.email"
            @click="editPost(post.id)"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Edit
          </button>
          <button
            v-if="auth?.currentUser?.email === post.email"
            @click="deletePost(post.id)"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Delete
          </button>
        </div>
      </div>
    </main>

  </div>
</template>

<style scoped>
/* Custom animations for enhanced beauty */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
.card {
  width: 400px;
  padding: 20px;
  border: 1px solid #b8b6b6;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  position: relative;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.mac-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.mac-header span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.mac-header .red {
  background-color: #ff5f57;
}

.mac-header .yellow {
  background-color: #ffbd2e;
}

.mac-header .green {
  background-color: #28c941;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #272729;
}

.card-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.card .card-tag {
  display: inline-block;
  font-size: 10px;
  border-radius: 5px;
  background-color: #0d1117;
  padding: 4px;
  margin-block-end: 12px;
  color: #dcdcdc;
}
.code-editor {
  background-color: #bbbbbb;
  color: #242424;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    monospace;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 5px;
  padding: 15px;
  overflow: auto;
  height: 150px;
  border: 1px solid #333;
}

.code-editor::-webkit-scrollbar {
  width: 8px;
}

.code-editor::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.code-editor pre code {
  white-space: pre-wrap;
  display: block;
}
</style>
