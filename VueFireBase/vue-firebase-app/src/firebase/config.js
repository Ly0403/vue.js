import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbqCCElvt4e1QHffEgbDA21UMLrlHeVJE",
  authDomain: "vuetest-deea1.firebaseapp.com",
  projectId: "vuetest-deea1",
  storageBucket: "vuetest-deea1.appspot.com",
  messagingSenderId: "551129722563",
  appId: "1:551129722563:web:6561610f5a198c4cc97c76",
  measurementId: "G-VBHZ368CKY"
};

const fb = initializeApp(firebaseConfig);

export {fb};