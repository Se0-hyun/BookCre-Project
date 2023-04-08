import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwSHruKY2zPvU13XDdDqV3_iwWFxjfRfc",
  authDomain: "bookcre-89790.firebaseapp.com",
  projectId: "bookcre-89790",
  storageBucket: "bookcre-89790.appspot.com",
  messagingSenderId: "1079195927388",
  appId: "1:1079195927388:web:b77be822198e42ba51b799",
  measurementId: "G-HZ056DEE4D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;