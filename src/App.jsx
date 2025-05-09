import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
   
    <BrowserRouter>
    {<Navbar/>}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
