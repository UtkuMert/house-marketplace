// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firabase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3bourtVddM2t-6mQalbcGPeHsDUtD11g",
  authDomain: "house-marketplace-app-ad99d.firebaseapp.com",
  projectId: "house-marketplace-app-ad99d",
  storageBucket: "house-marketplace-app-ad99d.appspot.com",
  messagingSenderId: "258071221683",
  appId: "1:258071221683:web:36b974faffcf94b97227c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();
