import React from 'react'
import ss from '../scss/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  //when clicking on the icon, the screen will be full screen and clicking again will exit full screen
  const openFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }
  return (
    <div className={ss.footer}>
      <FontAwesomeIcon icon={faExpand} onClick={openFullscreen} className={ss.icon}/>
    </div>
  )
}

export default Footer