import React from 'react'
import loginBg from '../assets/img/website-designing.svg'
import loginBgTwo from '../assets/img/collaborate.svg'
import loginBgThree from '../assets/img/background-spot.svg'

import SignUpForm from '../components/Forms/SignUpForm'

const LoginPage = () => {
  return (
    <div>
      <SignUpForm />
      <div>
        <img
          src={loginBg}
          className="login-bg one"
          alt="login background one"
        />
        <img
          src={loginBgTwo}
          className="login-bg two"
          alt="login background two"
        />
        <img
          src={loginBgThree}
          className="three"
          alt="login background three"
        />
      </div>
    </div>
  )
}

export default LoginPage
