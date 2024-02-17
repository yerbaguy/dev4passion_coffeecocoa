import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCTxsX--k2XTTGQ3X453rjqDk3VczTRvM8",
    authDomain: "coffee-cocoa-82919.firebaseapp.com",
    projectId: "coffee-cocoa-82919",
    storageBucket: "coffee-cocoa-82919.appspot.com",
    messagingSenderId: "704423007228",
    appId: "1:704423007228:web:d1af7d2a8a3bfb2994d879",
    measurementId: "G-MXF6WWZQY7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase};