import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0En4xUnTr4xBDq8eT0x-Uey2a4RZVvik",
  authDomain: "clone-fdab9.firebaseapp.com",
  projectId: "clone-fdab9",
  storageBucket: "clone-fdab9.appspot.com",
  messagingSenderId: "326282734923",
  appId: "1:326282734923:web:8a20918020a937e17bccce",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
export const auth = firebase.auth();
// export const auth = getAuth(app);
export const db = app.firestore();
