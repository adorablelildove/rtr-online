import React from 'react'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {

  return (
    <div className='main h-100vh'>
        <td className='collapse-btn left-0 bg-main'>
          <a><FaIcons.FaCaretDown /></a>
        </td>
        <div className='sidebar'>
            hello
        </div>
        <td className='expand-btn left-290 bg-main'>
          <a className='f-12 f-poppins spacing'>MENU</a>
        </td>
        <div className='container'>
            ini container
        </div>
    </div>
  )
}

export default Sidebar