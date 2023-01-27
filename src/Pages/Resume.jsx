import React from 'react'
import Desktop from '../assets/components/Desktop'
import projMod from '../assets/scss/General.module.css'
import TextEdit from '../assets/components/TextEdit'

function Resume() {
  return (
    <div className={projMod.main}>
      <p className={projMod.title}>TextEdit - Resumen</p>
      <Desktop />
      <TextEdit />
    </div>
  )
}

export default Resume