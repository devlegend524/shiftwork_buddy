import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: "shiftwork-buddy",
  storageBucket: "shiftwork-buddy.appspot.com",
  messagingSenderId: "591111296118",
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const db = getDatabase(app);

function createUser(userObject) {
  set(ref(db, "users/" + userObject.name), userObject);
}

export {
  db,
  googleProvider,
  githubProvider,
  auth,
  signInWithPopup,
  createUser,
};
