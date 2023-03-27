import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Exercise from './Components/Exercise';




const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <Routes>
      
        <Route path="/" element={<Home/>}/ >
        <Route path="/Exercise" element={<Exercise/>}/>
  
      </Routes>
    </div>
    </>
  )
}

export default App
