// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEwxFrkcPUg9zxonN2umIA1Z_E3X1tGP8",
  authDomain: "webapp-1912c.firebaseapp.com",
  databaseURL: "https://webapp-1912c-default-rtdb.firebaseio.com",
  projectId: "webapp-1912c",
  storageBucket: "webapp-1912c.appspot.com",
  messagingSenderId: "637487044305",
  appId: "1:637487044305:web:8408e6e2fb3276cb7ad7f0",
  measurementId: "G-K8MFHV3XSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);