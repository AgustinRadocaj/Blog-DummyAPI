import './App.css'
import { Route, Routes } from "react-router-dom";
import PostDisplay from './components/postDisplay/postDisplay'
import PostDetail from './components/PostDetail/PostDetail'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<PostDisplay />} />
      <Route path='/post/:id' element={<PostDetail />} />
    </Routes>
    </>
  )
}

export default App
