// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcZ7zaYDnU6l5uPkJQZN2SmYIIQjk3Hw",
  authDomain: "coffee-shop-app-4e6e9.firebaseapp.com",
  projectId: "coffee-shop-app-4e6e9",
  storageBucket: "coffee-shop-app-4e6e9.firebasestorage.app",
  messagingSenderId: "759238352810",
  appId: "1:759238352810:web:9159b0d9c301089c35d5d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);