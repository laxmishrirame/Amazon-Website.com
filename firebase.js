import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBgZuNP2JXBvDL95b35dAv3h-QVj2QmfbU",
    authDomain: "website-12990.firebaseapp.com",
    projectId: "website-12990",
    storageBucket: "website-12990.appspot.com",
    messagingSenderId: "791797725218",
    appId: "1:791797725218:web:fb93cb7f7b902007ec327b",
    measurementId: "G-5JLY4Q3WVH"
    
  });
  
  
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };