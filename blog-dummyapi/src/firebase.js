import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5SlalASw3Gx8VGLd81TluW9yKcmS1TA0",
    authDomain: "blog-bb205.firebaseapp.com",
    projectId: "blog-bb205",
    storageBucket: "blog-bb205.firebasestorage.app",
    messagingSenderId: "32040655826",
    appId: "1:32040655826:web:254a84789c1f837d18c60b",
    measurementId: "G-SQLN3QHH10"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export { auth, provider };