        
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGuxS2XIbdYKhl0TURy3cXFJ-uYEzlFoE",
    authDomain: "indemizar.firebaseapp.com",
    projectId: "indemizar",
    storageBucket: "indemizar.appspot.com",
    messagingSenderId: "779585513170",
    appId: "1:779585513170:web:7339eb9793d25081f4af0b",
    measurementId: "G-DH4KW20HKV"
};
      
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Base de Datos;
export const db = getFirestore(app);
// Auth
export const auth = getAuth(app);