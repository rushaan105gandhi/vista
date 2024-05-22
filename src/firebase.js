// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBkHyZUMRbbuYrYJuF7TiWOTRAkRnJ9Hm4",
//     authDomain: "vista-application.firebaseapp.com",
//     projectId: "vista-application",
//     storageBucket: "vista-application.appspot.com",
//     messagingSenderId: "334101543951",
//     appId: "1:334101543951:web:beb1c8a5eb4f441e8fb77a",
//     measurementId: "G-DQ35QYEC5D"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export { db, auth} ;

// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkHyZUMRbbuYrYJuF7TiWOTRAkRnJ9Hm4",
  authDomain: "vista-application.firebaseapp.com",
  projectId: "vista-application",
  storageBucket: "vista-application.appspot.com",
  messagingSenderId: "334101543951",
  appId: "1:334101543951:web:beb1c8a5eb4f441e8fb77a",
  measurementId: "G-DQ35QYEC5D"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
