import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import BlogView from '@/views/BlogView.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import EditView from '@/views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    redirect: '/home' // 🔹 هنا بنخلي root يروح على /home
  },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/create',
      name: 'create',
      component:  CreatePostView ,
      meta : { requiresAuth: true }
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component:  EditView ,
      meta : { requiresAuth: true }
    },
  ]
})


router.beforeEach(async (to, from, next) => {
  const user =auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});


export default router
