import * as firebase from 'firebase/app';
import 'firebase/firestore';

/*
const app = firebase.initializeApp({
  apiKey: "AIzaSyB-gfzqhtfdhDnz_2aBY3aEM0P00UaXkuY",
  authDomain: "computienda-coder.firebaseapp.com",
  databaseURL: "https://computienda-coder.firebaseio.com",
  projectId: "computienda-coder",
  storageBucket: "computienda-coder.appspot.com",
  messagingSenderId: "93341681611",
  appId: "1:93341681611:web:5b5320f421c8cd5b50984e"
});
*/
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
