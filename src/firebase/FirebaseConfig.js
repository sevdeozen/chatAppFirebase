// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYopeNsAk7ok2QCCl_0S9dCLp7LIatQ1k",
  authDomain: "chat-aa747.firebaseapp.com",
  projectId: "chat-aa747",
  storageBucket: "chat-aa747.appspot.com",
  messagingSenderId: "416259370376",
  appId: "1:416259370376:web:3dfc25458b0dffdcbf1e3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
