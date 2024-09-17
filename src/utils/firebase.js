import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setDoc, getFirestore, doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz0OEXto7vrWsVOeAKfcDs3Vj3rO4926Y",
  authDomain: "ecommerce-181c6.firebaseapp.com",
  projectId: "ecommerce-181c6",
  storageBucket: "ecommerce-181c6.appspot.com",
  messagingSenderId: "950690602983",
  appId: "1:950690602983:web:ac5d2996b2c2f66c422742",
  measurementId: "G-HY0887TCNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  setDoc,
  doc,
  getDoc,
};
