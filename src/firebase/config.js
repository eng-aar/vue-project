import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAIaixq-UB5PxcOXt9qF7e5QzxHEsYkffM',
  authDomain: 'blog-2ac65.firebaseapp.com',
  projectId: 'blog-2ac65',
  storageBucket: 'blog-2ac65.appspot.com', // صححت هنا .app → .appspot.com
  messagingSenderId: '3179011062',
  appId: '1:3179011062:web:e84ad5821f6b9dc09905d7',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
