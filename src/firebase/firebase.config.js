// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBISen_AuIQGk-UdNiKHUnlBZQ00xQFBEE",
  authDomain: "second-concept-firebase-fca0f.firebaseapp.com",
  projectId: "second-concept-firebase-fca0f",
  storageBucket: "second-concept-firebase-fca0f.firebasestorage.app",
  messagingSenderId: "379209061349",
  appId: "1:379209061349:web:3e71233734eefb5030d50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth