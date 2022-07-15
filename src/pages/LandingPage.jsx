import React, { useState } from 'react'
import Header from '../components/LandingPage/Header'
import Content from '../components/LandingPage/Content'
import SecondaryContent from '../components/LandingPage/SecondaryContent'
import Footer from '../components/LandingPage/Footer'

const LandingPage = () => {
  const [headerBool, setHeaderBool] = useState(false);
  
  const handleHeaderBool = (bool) => {
   setHeaderBool(bool)
  }
  
  return (
    <div>
      <Header onHeaderBool={handleHeaderBool} />
      <Content />
      <SecondaryContent />
      <Footer />
    </div>
  )
}

export default LandingPage
