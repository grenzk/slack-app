import React from 'react'
import { Button } from '@mantine/core'
import MobileSvg from '../../assets/img/mobile.svg'
import DesktopSvg from '../../assets/img/working-with-laptop.svg'

const SecondaryContent = () => {
  return (
    <div>
      <main className="secondary-content">
        <div className="first-container">
          <h2 className="download-text">Mobile</h2>
          <Button size="xl" radius="xl">
            Download
          </Button>
          <img src={MobileSvg} alt="SVG" className="svg-content-too" />
        </div>
        <div className="first-container">
          <h2 className="download-text">Desktop</h2>
          <Button size="xl" radius="xl">
            Download
          </Button>
          <img src={DesktopSvg} alt="SVG" className="svg-content-too desktop" />
        </div>
      </main>
    </div>
  )
}

export default SecondaryContent
