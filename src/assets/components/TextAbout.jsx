import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../scss/Window.module.css'
import textMod from '../scss/TextEdit.module.css'
import textAbout from '../about'

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

  return (
    <div className={style.box} id="mydiv" >
      <div className={`${style.box_bar} ${style.box_bar_header}`} id="mydivheader" onMouseDown={() => dragElement(document.getElementById("mydiv"))}>
        <div className={style.box_bar_close}>
          <div>
            <ul>
              <NavLink to={'/'}><li className={style.close} title='Cerrar'></li></NavLink>
              <li className={style.minimize}></li>
              <li className={style.expand}></li>
            </ul>
          </div>
        </div>
        <div className={style.box_bar_title}>
          <p>TextEdit - About this</p>
        </div>
      </div>
      <hr />
      {/* textedit */}
      <div className={textMod.textarea}>
        <textarea id="textarea" cols="30" rows="10" defaultValue={textAbout} />
      </div>
    </div >
  )
}

export default Window