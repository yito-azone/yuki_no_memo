// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGKDoAQG_MT7E6bVpp8VboeljAhub_QbI",
  authDomain: "yuki-no-memo.firebaseapp.com",
  projectId: "yuki-no-memo",
  storageBucket: "yuki-no-memo.appspot.com",
  messagingSenderId: "106203810648",
  appId: "1:106203810648:web:72d77fc5f890a440a7732d",
  measurementId: "G-1VT5DDE0PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
