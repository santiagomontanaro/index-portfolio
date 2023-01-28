import React from 'react'
import projMod from '../assets/scss/General.module.css'
import Desktop from '../assets/components/Desktop'
import TextAbout from '../assets/components/TextAbout'

function About() {
  return (
    <div className={projMod.main}>
      <p className={projMod.title}>TextEdit - About this</p>
      <Desktop />
      <TextAbout />
    </div>
  )
}

export default About