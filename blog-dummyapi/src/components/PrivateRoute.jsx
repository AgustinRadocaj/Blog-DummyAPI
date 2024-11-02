import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log("Current user in PrivateRoute:", currentUser);

  return currentUser ? children : <Navigate to="/" />;
};



export default PrivateRoute;
