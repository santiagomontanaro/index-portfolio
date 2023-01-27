import { React } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import navModule from '../scss/Navbar.module.css'

function NavBar(date) {

  return (
    <div>
      <nav className={navModule.navbar}>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faApple} style={{ fontSize: '1.4rem', color: '#000' }} className={navModule.logo} />
          </NavLink>
        </div>
        <div>
          <p>{date.date ? date.date : ''}</p>
        </div>
      </nav>
    </div>
  )
}

export default NavBar