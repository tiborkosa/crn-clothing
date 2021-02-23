import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwrwUU3WOtnKOUFEd_t4XnZdLcCEj7bvk",
    authDomain: "crn-db-a1ac0.firebaseapp.com",
    projectId: "crn-db-a1ac0",
    storageBucket: "crn-db-a1ac0.appspot.com",
    messagingSenderId: "660342838402",
    appId: "1:660342838402:web:1fb99224c2c52130be509b",
    measurementId: "G-X93PD990PJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
