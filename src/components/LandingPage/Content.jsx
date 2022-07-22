import React from 'react'
import { Button } from '@mantine/core'
import mySvg from '../../assets/img/women-web-developer-with-laptop.svg'

const Content = () => {
  const routeChange = () => {
    window.location.assign('/SignUpPage')
  }

  return (
    <div>
      <main className="main">
        <div className="col-1">
          <h1 className="hero-text left">Get Slack for any device</h1>
          <p className="secondary-text left">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <Button
            className="sign-up-btn left"
            size="xl"
            radius="xl"
            onClick={routeChange}
          >
            Sign up
          </Button>
        </div>
        <img src={mySvg} alt="SVG" className="svg-content" />
      </main>
    </div>
  )
}

export default Content
