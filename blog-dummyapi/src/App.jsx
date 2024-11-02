import './App.css'
import { Route, Routes } from "react-router-dom";
import PostDisplay from './views/PostDisplay/PostDisplay';
import UsersDisplay from './views/UsersDisplay/UsersDisplay';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute'; 
import AuthProvider from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route 
          path='/' 
          element={<PostDisplay />} 
        />
        <Route 
          path='/users' 
          element={<UsersDisplay />} 
        />
      </Routes>
    </AuthProvider>
  );
}
export default App
