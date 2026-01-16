import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxxxxxxxxxm',
  projectId: 'xxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxx', // صححت هنا .app → .appspot.com
  messagingSenderId: 'xxxxxxxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxxxxxxx',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
