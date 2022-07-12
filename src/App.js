import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
