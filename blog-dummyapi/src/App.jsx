import './App.css'
import { Route, Routes } from "react-router-dom";
import PostDisplay from './components/postDisplay/postDisplay'
import PostDetail from './components/PostDetail/PostDetail'
import UsersDisplay from './components/UsersDisplay/UsersDisplay'
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute'; 
import AuthProvider from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<PostDisplay />} />
        <Route 
          path='/users' 
          element={
            <PrivateRoute>
              <UsersDisplay />
            </PrivateRoute>
          } 
        />
        <Route path='/post/:id' element={<PostDetail />} />
      </Routes>
    </AuthProvider>
  );
}
export default App
