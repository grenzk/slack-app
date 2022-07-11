import React from 'react'
import * as FontAwesome from 'react-icons/fa'
import { Button } from '@mantine/core'

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav-container">
          <a href="#" className="nav-logo">
            <FontAwesome.FaSlack />
            Slack
          </a>

          <div class="nav-menu" id="nav-menu">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#download" class="nav-link active-link">
                  Download
                </a>
              </li>
              <li class="nav-item">
                <a href="#support" class="nav-link">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="#pricing" class="nav-link">
                  Pricing
                </a>
              </li>

              <Button>Login</Button>

              {/* <i class="bx bx-toggle-left change-theme" id="theme-button"></i> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default LandingPage
