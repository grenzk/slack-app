import React from 'react'
import * as FontAwesome from 'react-icons/fa'
import { Button } from '@mantine/core'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav-container">
          <a href="#home" className="nav-logo">
            <FontAwesome.FaSlack />
            Slack
          </a>

          <div className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#download" className="nav-link active-link">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a href="#support" className="nav-link">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <Button radius="xl">Login</Button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
