import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAiXrIu8UA435JyBoVHvqGOv4w1Nb3iNCg",
  authDomain: "proyecto-1-cc4eb.firebaseapp.com",
  databaseURL: "https://proyecto-1-cc4eb-default-rtdb.firebaseio.com",
  projectId: "proyecto-1-cc4eb",
  storageBucket: "proyecto-1-cc4eb.firebasestorage.app",
  messagingSenderId: "855085918177",
  appId: "1:855085918177:web:af99d6c31b24ddda81d4a0",
  measurementId: "G-RQMM1RRP0C"
};


app .initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();