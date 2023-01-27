import React from 'react'
import projMod from '../assets/scss/General.module.css'
import Desktop from '../assets/components/Desktop'
import Window from '../assets/components/Window'

function Projects() {
  
  return (
    <div className={projMod.main}>
      <p className={projMod.title}>Finder</p>
      <Desktop />
      <Window />
    </div>
  )
}

export default Projects