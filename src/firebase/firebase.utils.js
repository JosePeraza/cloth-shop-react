import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCoF7JCcR-1-E3h2-tOb7r30XyDfYeBXv8",
    authDomain: "crwn-db-41055.firebaseapp.com",
    projectId: "crwn-db-41055",
    storageBucket: "crwn-db-41055.appspot.com",
    messagingSenderId: "673255035772",
    appId: "1:673255035772:web:bff1883430ea420cd8caf9",
    measurementId: "G-K9ZCE0S7WB"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;