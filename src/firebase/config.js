import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCacmn7qoKkLVd4NnhrH_gvk3j0duBXFeo",
  authDomain: "canabalcaronni-proyecto2.firebaseapp.com",
  projectId: "canabalcaronni-proyecto2",
  storageBucket: "canabalcaronni-proyecto2.firebasestorage.app",
  messagingSenderId: "808568984208",
  appId: "1:808568984208:web:205c96eb623635219bbe15",
  measurementId: "G-7QGWBJS4CK"
};

app .initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();