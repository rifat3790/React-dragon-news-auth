// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnJLmR5g2k8vsMLNs-S8aG5q6Azk3VXxw",
  authDomain: "react-dragon-news-auth-1e22d.firebaseapp.com",
  projectId: "react-dragon-news-auth-1e22d",
  storageBucket: "react-dragon-news-auth-1e22d.appspot.com",
  messagingSenderId: "93111488715",
  appId: "1:93111488715:web:6cb35071cd6a022b3b0b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;