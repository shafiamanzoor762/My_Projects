// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, initializeAuth,getReactNativePersistence } from 'firebase/auth'
import { ReactNativeAsyncStorage } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAyL4idk-UFUVP_E5czPL-6BA58oa6UfsM",
  authDomain: "convotalk1.firebaseapp.com",
  projectId: "convotalk1",
  storageBucket: "convotalk1.appspot.com",
  messagingSenderId: "414146019191",
  appId: "1:414146019191:web:d8f4dc7647514e9d042b72",
  measurementId: "G-TQYJ9M2YQE"
};

rules_version = '2';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export {app,auth};