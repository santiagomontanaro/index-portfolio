import React from 'react'
import { NavLink } from 'react-router-dom'
import folderIcon from '../img/folder-icon.png'
import txtIcon from '../img/txt-icon.png'
import linkedinIcon from '../img/linkedin-icon.png'
import githubIcon from '../img/github-icon.png'
import wspIcon from '../img/wsp-icon.png'
import spotifyIcon from '../img/spotify-icon.png'
import gmailIcon from '../img/gmail-icon.png'
import deskMod from '../scss/Desktop.module.css'

function Desktop() {

  // map through the array of objects and create a div for each object
  const desktopIcons = [
    {
      id: 1,
      name: 'Links proyectos',
      icon: folderIcon,
      link: '/projects'
    },
    {
      id: 2,
      name: 'Resumen',
      icon: txtIcon,
      link: '/resume'
    },
    {
      name: 'Github',
      icon: githubIcon,
      link: 'https://github.com/santiagomontanaro',
      blank: true
    },
    {
      name: 'Spotify',
      icon: spotifyIcon,
      link: 'https://open.spotify.com/playlist/3DIjw8eboATMgRN2RC6mz6?si=d654986888d44dd5',
      blank: true
    },
    {
      name: 'Linkedin',
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/montsan',
      blank: true
    },
    {
      name: 'Whatsapp',
      icon: wspIcon,
      link: 'https://wa.me/5493412804346?text=Hola%20Santiago,%20me%20gustaría%20contactarte%20por%20tu%20CV.',
      blank: true
    }
  ]

  const gmail = [
    {
      name: 'Gmail',
      icon: gmailIcon,
      link: 'mailto:santmon99@gmail.com',
      blank: true
    }
  ]

  return (
    <div className={deskMod.desktop}>
      {
        desktopIcons.map((item, index) => {
          return (
            <NavLink to={`${item.link}`} key={index} target={item.blank ? '_blank' : ''} className={deskMod.link} style={{ textDecoration: 'none' }}>
              <div className={deskMod.items}>
                <img src={item.icon} alt={item.name} className={deskMod.icon} />
                <p>{item.name}</p>
              </div>
            </NavLink>
          )
        })
      }
      {
        gmail.map((item) => {
          return (
            <a href={`${item.link}`} key={item.id} target={item.blank ? '_blank' : ''} className={deskMod.link} style={{ textDecoration: 'none' }}>
              <div className={deskMod.items}>
                <img src={item.icon} alt={item.name} className={deskMod.icon} />
                <p>{item.name}</p>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}
export default Desktop