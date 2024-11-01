import './App.css'
import { Route, Routes } from "react-router-dom";
import PostDisplay from './components/postDisplay/postDisplay'
import PostDetail from './components/PostDetail/PostDetail'
import UsersDisplay from './components/UsersDisplay/UsersDisplay'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<PostDisplay />} />
      <Route path='/users' element={<UsersDisplay />} />
      <Route path='/post/:id' element={<PostDetail />} />
    </Routes>
    </>
  )
}

export default App
