import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
