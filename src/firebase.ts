import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrJsWcgWvImS86tCKim4eQqC5Rp94-_pM",
  authDomain: "nwitter-reloaded-3.firebaseapp.com",
  projectId: "nwitter-reloaded-3",
  storageBucket: "nwitter-reloaded-3.firebasestorage.app",
  messagingSenderId: "222335907416",
  appId: "1:222335907416:web:20e149983b2437da09fc2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 받아오기(app에 대한 auth인증을 사용하고 싶다)
export const auth = getAuth(app);