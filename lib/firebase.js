// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdU9lBnRzVdHUATcGncuVvEA0gj0Gq1ZE",
  authDomain: "bridge-99e06.firebaseapp.com",
  projectId: "bridge-99e06",
  storageBucket: "bridge-99e06.firebasestorage.app",
  messagingSenderId: "585642351980",
  appId: "1:585642351980:web:180146eecbfb6382c2e749",
  measurementId: "G-K4PW3H5QQV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };