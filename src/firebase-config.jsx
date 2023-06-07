// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5s4d_SHk5w1xMGUtVwzaA6G6KiV6ItlU",
  authDomain: "react-dashboard-9cd90.firebaseapp.com",
  projectId: "react-dashboard-9cd90",
  storageBucket: "react-dashboard-9cd90.appspot.com",
  messagingSenderId: "289941740340",
  appId: "1:289941740340:web:e827f772c93d3b346e6361",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
