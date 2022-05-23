import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [style, setStyle] = useState("expand-btn close");
  const collapsed = () => {
    setStyle(isOpen ? "expand-btn show" : "expand-btn close");
  }
  const expanded = () => {
    setStyle(isOpen ? "expand-btn show" : "expand-btn close");
  }

  return (
    <div className='main h-100vh'>
        <td className={style} onClick={() => {setIsOpen(!isOpen); expanded()}}>
          <a className='f-12 f-poppins spacing'>MENU</a>
        </td>

        {/* responsive sidebar */}
        <div className={isOpen ? "sidebar show" : "sidebar close"}>
            hello
        </div>
        <td className={isOpen ? "collapse-btn show" : "collapse-btn close"} onClick={() => {setIsOpen(!isOpen); collapsed()}}>
          <a><FaIcons.FaCaretDown /></a>
        </td>
        {/* responsive sidebar end */}
        
        <div className='container'>
            <h1>ini container</h1>
        </div>
    </div>
  )
}

export default Sidebar