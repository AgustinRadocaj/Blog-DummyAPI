// src/components/Login/Login.js
import React from 'react';
import { auth, provider } from '../../firebase'; // Asegúrate de que la ruta sea correcta
import { signInWithPopup } from "firebase/auth";

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
    </div>
  );
}

export default Login;
