// src/components/Login/Login.js
import React from 'react';
import { auth, provider } from '../../firebase'; // Asegúrate de que la ruta sea correcta
import { signInWithPopup } from "firebase/auth";

function Login() {
    const handleLogin = async () => {
        try {
          console.log("Attempting to log in...");
          const result = await signInWithPopup(auth, provider);
          console.log("Login successful:", result);
        } catch (error) {
          console.error("Error during login:", error);
        }
      };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
    </div>
  );
}

export default Login;
