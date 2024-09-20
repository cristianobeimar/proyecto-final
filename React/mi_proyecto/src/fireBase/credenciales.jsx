// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWu_wbwo98olnlafgVkdXCWVM0nb8LgXM",
  authDomain: "tienda-virtual-e2c7a.firebaseapp.com",
  projectId: "tienda-virtual-e2c7a",
  storageBucket: "tienda-virtual-e2c7a.appspot.com",
  messagingSenderId: "628358732806",
  appId: "1:628358732806:web:5e58832433bb431e7ff787",
  measurementId: "G-4W94CBQTDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

export {auth,providerGoogle, app};