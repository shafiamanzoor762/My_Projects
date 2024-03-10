// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPqGQtH6lg2Q801n3PH7k2jTHKYkqDcAg",
  authDomain: "pocketbuddy-2af1f.firebaseapp.com",
  projectId: "pocketbuddy-2af1f",
  storageBucket: "pocketbuddy-2af1f.appspot.com",
  messagingSenderId: "203800908861",
  appId: "1:203800908861:web:198443292f0fcf29be4654",
  measurementId: "G-78XGXEEWP6"
};
rules_version = '2';

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if false;
//     }
//   }
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export default app;