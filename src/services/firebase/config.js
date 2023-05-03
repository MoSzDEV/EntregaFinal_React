// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA1OaQ0AmgtahjaAABx5BNpny_l_UL715w",
  authDomain: "coderreactmosz.firebaseapp.com",
  projectId: "coderreactmosz",
  storageBucket: "coderreactmosz.appspot.com",
  messagingSenderId: "1047775820855",
  appId: "1:1047775820855:web:20ec7820773c5096ef93b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);