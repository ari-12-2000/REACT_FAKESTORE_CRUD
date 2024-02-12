import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "crud-7aac6.firebaseapp.com",
  projectId: "crud-7aac6",
  storageBucket: "crud-7aac6.appspot.com",
  messagingSenderId: "1054585534196",
  appId: "1:1054585534196:web:946ac4e3ed4dd19e7850a1",
  measurementId: "G-0L3ZP9XB8C",
  databaseURL: "https://crud-7aac6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;

