import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore()
