import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkp4A_NcV-XetjlVgej4j1vV0Uevpb1bc",
  authDomain: "crwn-app2-a53b0.firebaseapp.com",
  projectId: "crwn-app2-a53b0",
  storageBucket: "crwn-app2-a53b0.appspot.com",
  messagingSenderId: "48484194767",
  appId: "1:48484194767:web:d08900db4b4a0183361aba",
  measurementId: "G-S32HKRH24B",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }

    return userDocRef;
  }
};
