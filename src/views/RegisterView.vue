<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/config' // لو عندك ملف config جاهز
import { createUserWithEmailAndPassword } from 'firebase/auth'
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()
const errorMessage = ref(null)
const isLoading = ref(false)

const register = async () => {
  errorMessage.value = ''
  isLoading.value = true

  if (!email.value) {
    errorMessage.value = 'Please fill in email'
    isLoading.value = false
    return
  }

  if (!password.value || !confirmPassword.value) {
    errorMessage.value = 'Please fill in all password fields'
    isLoading.value = false
    return
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Password should be at least 6 characters'
    isLoading.value = false
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match'
    isLoading.value = false
    return
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    console.log('Registered:', userCredential.user.email)

    // بعد التسجيل → يروح Login (الأصح)
    router.push('/login')

  } catch (error) {
    console.error(error.code, error.message)

    // رسائل مفهومة للمستخدم
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage.value = 'This email is already registered'
        break
      case 'auth/invalid-email':
        errorMessage.value = 'Invalid email address'
        break
      case 'auth/weak-password':
        errorMessage.value = 'Password is too weak'
        break
      default:
        errorMessage.value = 'Something went wrong, please try again'
    }
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
        Create your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="register" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-900"
            >Confirm Password</label
          >
          <div class="mt-2">
            <input
              v-model="confirmPassword"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autocomplete="new-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>
        </div>

        <!-- Submit -->
        <div>
          <!-- Error Message -->
          <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <div class="flex">
              <div class="shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-red-800">{{ errorMessage }}</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isLoading || !email || !password || !confirmPassword"
          >
            <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Creating Account...' : 'Register' }}
          </button>
        </div>


      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <router-link to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</router-link>
      </p>
    </div>
  </div>
</template>
<style scoped></style>
