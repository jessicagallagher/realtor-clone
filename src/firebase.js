// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZ4rl5MTYH3uRxR8_lbhnoplgztQhFJmg',
  authDomain: 'realtor-clone-7bad1.firebaseapp.com',
  projectId: 'realtor-clone-7bad1',
  storageBucket: 'realtor-clone-7bad1.appspot.com',
  messagingSenderId: '580857128495',
  appId: '1:580857128495:web:46b776a0e30461c6d2c8da',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
