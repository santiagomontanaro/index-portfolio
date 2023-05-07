import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../scss/Window.module.css'
import chromeIcon from '../img/chrome-icon.webp'

function Window() {

  // draggable window from bar title
  const dragElement = (elmnt) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV: 
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  useEffect(() => {
    dragElement(document.getElementById("mydiv"))
  }, [])

  const proyects = [
    {
      name: 'GiFacts',
      icon: 'https://i.ibb.co/TrcW9xK/nyan-Cat-Icon.png',
      link: 'https://gfacts.vercel.app/'
    },
    {
      name: 'Rick and Morty API',
      icon: 'https://i.ibb.co/wh0wKZB/rickIcon.png',
      link: 'https://rnmapi.vercel.app/'
    },
    {
      name: 'uWeather',
      icon: chromeIcon,
      link: 'https://uweatherapp.vercel.app/'
    },
    {
      name: 'Starbucks Landing Page',
      icon: 'https://i.ibb.co/PNTmwWz/starbusck-Icon.webp',
      link: 'https://santiagomontanaro.github.io/starbucks-landing-switch-dark/#'
    },
    {
      name: 'Randomize Color',
      icon: 'https://i.ibb.co/DL4Lw0n/randomize-Color.png',
      link: 'https://santiagomontanaro.github.io/color-flipper/'
    },
    {
      name: 'DolAr App',
      icon: 'https://i.ibb.co/kS6mMnc/dolar-App-logo.png',
      link: 'https://dollarp.vercel.app/'
    }
  ]

  return (
    <div className={style.box} id="mydiv" >
      <div className={`${style.box_bar}`} id="mydivheader" onMouseDown={() => dragElement(document.getElementById("mydiv"))}>
        <div className={style.box_bar_close}>
          <div>
            <ul>
              <NavLink to={'/'}><li className={style.close} title='Close'></li></NavLink>
              <li className={style.minimize}></li>
              <li className={style.expand}></li>
            </ul>
          </div>
        </div>
        <div className={style.box_bar_title}>
          <p>Finder - Projects</p>
        </div>
      </div>
      <hr />
      <div className={style.main}>
        {
          proyects.map((item, index) => {
            return (
              <NavLink key={index} to={`${item.link}`} target='_blank'>
                <div className={style.items}>
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </NavLink>
            )
          })
        }
      </div>
    </div >
  )
}

export default Window