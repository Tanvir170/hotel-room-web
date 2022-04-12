// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApc60jBvWkC5MDJTYSlLs3KqILocHtt5w",
  authDomain: "hotel-room-web.firebaseapp.com",
  projectId: "hotel-room-web",
  storageBucket: "hotel-room-web.appspot.com",
  messagingSenderId: "246956881093",
  appId: "1:246956881093:web:e399048137abfe2c97acac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);

export default auth;