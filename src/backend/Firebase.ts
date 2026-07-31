// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0O8XZItTW9kCwwAyCV1A_X-qnFJAGLS4",
  authDomain: "react-typescript-chatzo-cg.firebaseapp.com",
  projectId: "react-typescript-chatzo-cg",
  storageBucket: "react-typescript-chatzo-cg.firebasestorage.app",
  messagingSenderId: "61433720244",
  appId: "1:61433720244:web:459f29c9a2f498cd7c96e1",
  measurementId: "G-Y73QDHFGV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);