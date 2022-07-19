import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SignUpPage from './pages/SignUpPage'
import { UserContextProvider } from './contexts/User'

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
          <Route path="MainPage/*" element={<MainPage />} />
        </Routes>
      </div>
    </UserContextProvider>
  )
}

export default App
