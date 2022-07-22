import React, { useEffect } from 'react'
import { Transition } from '@mantine/core'
import loginBg from '../assets/img/website-designing.svg'
import loginBgTwo from '../assets/img/collaborate.svg'
import loginBgThree from '../assets/img/background-spot.svg'

import SignUpForm from '../components/Forms/SignUpForm'

const SignUpPage = ({ opened, setOpened }) => {
  useEffect(() => {
    setOpened(true)
  }, [setOpened])

  return (
    <div>
      <Transition
        mounted={opened}
        transition="scale-y"
        duration={700}
        timingFunction="ease"
      >
        {styles => (
          <div
            style={{
              ...styles,
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 100,
            }}
          >
            <SignUpForm />
          </div>
        )}
      </Transition>

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

export default SignUpPage
