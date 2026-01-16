
<script setup>
import { ref, onMounted } from 'vue'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentUser = ref(null)

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}

// Listen for authentication state changes
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    currentUser.value = user
  })
})
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12">
    <!-- Header with User Info and Logout Button -->
    <div class="container mx-auto px-6 mb-8">
      <div class="flex justify-between items-center">
        <!-- Left side - OurBlog link -->

<router-link 
  to="/home" 
  class="text-indigo-600 text-3xl font-bold hover:text-indigo-800 transition-colors duration-300"
>
  Home
</router-link>



        <!-- Center - Blog title -->
        <h1 class="text-5xl font-extrabold text-gray-800 tracking-tight absolute left-1/2 transform -translate-x-1/2">
          Our Blog
        </h1>

        <!-- Right side - User info and logout -->
        <div class="flex items-center space-x-4">
          <!-- User Info -->
          <div v-if="currentUser" class="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border">
            <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
              <span class="text-white text-xs font-semibold">
                {{ currentUser.email.charAt(0).toUpperCase() }}
              </span>
            </div>
            <span class="text-sm text-gray-700 font-medium">
              {{ currentUser.email }}
            </span>
          </div>

          <!-- Logout Button -->
          <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Logout
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6">
      <p class="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Discover insights, stories, and inspiration from our community. Stay updated with the latest trends and tips.
      </p>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Blog Post 1 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 bg-linear-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">📝</span>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Technology</span>
              <span class="text-gray-500 text-sm ml-auto">Jan 16, 2026</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">The Future of Web Development</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Explore the latest trends in web development, from modern frameworks to cutting-edge technologies that are shaping the digital landscape.
            </p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>

        <!-- Blog Post 2 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 bg-linear-to-r from-green-400 to-blue-400 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">🚀</span>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Innovation</span>
              <span class="text-gray-500 text-sm ml-auto">Jan 15, 2026</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Building Scalable Applications</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Learn the best practices for creating applications that can grow with your business needs and handle increasing user demands.
            </p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>

        <!-- Blog Post 3 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 bg-linear-to-r from-orange-400 to-red-400 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">💡</span>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Design</span>
              <span class="text-gray-500 text-sm ml-auto">Jan 14, 2026</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">UI/UX Best Practices</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Discover the principles of great user interface and user experience design that create engaging and intuitive applications.
            </p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>

        <!-- Blog Post 4 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 bg-linear-to-r from-teal-400 to-cyan-400 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">🔧</span>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <span class="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">Tutorial</span>
              <span class="text-gray-500 text-sm ml-auto">Jan 13, 2026</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Getting Started with Vue.js</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              A comprehensive guide for beginners to start building amazing applications with Vue.js and modern development tools.
            </p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>

        <!-- Blog Post 5 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 bg-linear-to-r from-pink-400 to-purple-400 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">📊</span>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <span class="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full">Analytics</span>
              <span class="text-gray-500 text-sm ml-auto">Jan 12, 2026</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Data-Driven Development</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              How to leverage data and analytics to make informed decisions and create better user experiences in your applications.
            </p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>

        <!-- Blog Post 6 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 bg-linear-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">🌟</span>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Inspiration</span>
              <span class="text-gray-500 text-sm ml-auto">Jan 11, 2026</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Creative Coding Techniques</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Unleash your creativity with advanced coding techniques and patterns that push the boundaries of what's possible.
            </p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Load More Posts
        </button>
      </div>
    </div>
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
</style>