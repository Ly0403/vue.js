// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWruwUrSipIuL25ex58p-0kF8za94OVoY",
  authDomain: "vue-blog-app-cce84.firebaseapp.com",
  projectId: "vue-blog-app-cce84",
  storageBucket: "vue-blog-app-cce84.appspot.com",
  messagingSenderId: "577780592124",
  appId: "1:577780592124:web:c15961e7bfc04f1b2f9679",
  measurementId: "G-VQZRNLTLM0"
};


const fb = initializeApp(firebaseConfig);

export {fb};