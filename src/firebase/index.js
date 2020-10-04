import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyB-gfzqhtfdhDnz_2aBY3aEM0P00UaXkuY",
  authDomain: "computienda-coder.firebaseapp.com",
  databaseURL: "https://computienda-coder.firebaseio.com",
  projectId: "computienda-coder",
  storageBucket: "computienda-coder.appspot.com",
  messagingSenderId: "93341681611",
  appId: "1:93341681611:web:5b5320f421c8cd5b50984e"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
