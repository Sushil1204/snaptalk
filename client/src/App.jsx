import React, { useMemo } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme.js';
import { useSelector } from 'react-redux';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/profile/:userId" element={<ProfilePage/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App