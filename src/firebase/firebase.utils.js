// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup,} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDdQ6Mcnu-pGlbRvnFT6-ou43nwYubnCyE",
  authDomain: "first-ecommerce-abb65.firebaseapp.com",
  projectId: "first-ecommerce-abb65",
  storageBucket: "first-ecommerce-abb65.appspot.com",
  messagingSenderId: "771478734817",
  appId: "1:771478734817:web:41731b699b3b19ea37b4a0",
  measurementId: "G-Z0PP5TC9KD",
};

const app = initializeApp(config);

const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await setDoc(userRef, {
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }
  return userRef;
};

export const auth = getAuth(app);



export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider) 
    .catch((err) => console.log(err));
};
