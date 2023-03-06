import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { db, auth, signInWithPopup, googleProvider, githubProvider };
