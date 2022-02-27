// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//start-of-temp

import { collection, addDoc } from 'firebase/firestore';

//out-of-temp

const config = {
  apiKey: 'AIzaSyDdQ6Mcnu-pGlbRvnFT6-ou43nwYubnCyE',
  authDomain: 'first-ecommerce-abb65.firebaseapp.com',
  projectId: 'first-ecommerce-abb65',
  storageBucket: 'first-ecommerce-abb65.appspot.com',
  messagingSenderId: '771478734817',
  appId: '1:771478734817:web:41731b699b3b19ea37b4a0',
  measurementId: 'G-Z0PP5TC9KD',
};

const app = initializeApp(config);

const db = getFirestore();

export const auth = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((user) => {
      console.log('user');
    })
    .catch((err) => console.log(err));
};

