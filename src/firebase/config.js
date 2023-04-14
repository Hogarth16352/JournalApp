// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDedlaAW1gwA3yI_V2ST3IvUFpxrcHdU5A",
  authDomain: "react-cursos-75d9f.firebaseapp.com",
  projectId: "react-cursos-75d9f",
  storageBucket: "react-cursos-75d9f.appspot.com",
  messagingSenderId: "359709542654",
  appId: "1:359709542654:web:f858cfe13e15d9d77dfdaf"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );