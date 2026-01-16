<template>
  <div class="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to Our
            <span class="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Blog
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover insightful articles, tutorials, and stories that inspire and educate. Join our community of curious minds.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/blog" class="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
              Read Our Blog
            </router-link>
            <router-link to="/register" class="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 text-center">
              Get Started
            </router-link>
          </div>
          <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/login" class="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors duration-300">
              Already have an account? Login
            </router-link>
            <span class="hidden sm:block text-gray-400">|</span>
            <router-link to="/register" class="text-purple-600 hover:text-purple-800 font-medium text-lg transition-colors duration-300">
              Create New Account
            </router-link>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-pulse delay-500"></div>
    </div>

    <!-- Features Section -->
    <div class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Our Blog Stands Out
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our blog the perfect place for writers, readers, and curious minds alike
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature Card 1 -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">✍️</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Expert Writers</h3>
            <p class="text-gray-600 leading-relaxed">Our team of experienced writers and contributors bring you high-quality, well-researched content on diverse topics.</p>
          </div>

          <!-- Feature Card 2 -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-linear-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🎨</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Beautiful Design</h3>
            <p class="text-gray-600 leading-relaxed">Enjoy a modern, clean interface that makes reading and navigation a delightful experience for everyone.</p>
          </div>

          <!-- Feature Card 3 -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-linear-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">📚</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Diverse Content</h3>
            <p class="text-gray-600 leading-relaxed">From tutorials to opinion pieces, explore a wide range of topics that cater to different interests and expertise levels.</p>
          </div>

          <!-- Feature Card 4 -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-linear-to-br from-indigo-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">💬</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
            <p class="text-gray-600 leading-relaxed">Join discussions, share your thoughts, and connect with like-minded individuals in our growing community.</p>
          </div>

          <!-- Feature Card 5 -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🚀</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Regular Updates</h3>
            <p class="text-gray-600 leading-relaxed">Stay updated with fresh content published regularly, keeping you informed and entertained.</p>
          </div>

          <!-- Feature Card 6 -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-linear-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🎯</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">SEO Optimized</h3>
            <p class="text-gray-600 leading-relaxed">All our content is optimized for search engines, making it easy for readers to find exactly what they're looking for.</p>
          </div>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-linear-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-linear-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl -z-10"></div>
    </div>

    <!-- CTA Section -->
    <div class="bg-linear-to-r from-gray-900 to-gray-800 py-16">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Join Our Blog Community?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Create an account to comment on posts, save your favorite articles, and get notified about new content.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/register" class="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
            Create Account
          </router-link>
          <router-link to="/login" class="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 text-center">
            Login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style>