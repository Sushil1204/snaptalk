import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
