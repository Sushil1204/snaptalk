import React, { useMemo } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { useSelector } from 'react-redux';

function App() {
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
          <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          />
        </Routes>
    </div>
  )
}

export default App
