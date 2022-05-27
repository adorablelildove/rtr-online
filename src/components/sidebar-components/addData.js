import React from 'react'
import * as FaIcons from 'react-icons/fa'

function AddData() {   
  return (
    <div className="row h-80vh">
      <div className='col bg-blue'>
        <div className='row sub-menu'>
          <div className='col-10'>Rencana Tata Ruang (RTR)</div>
          <div className='col-2'><FaIcons.FaCaretDown /></div>
        </div>
        <div className='row submenu-content'>
          <div className='col'>
          <h1>ini content</h1>
          <h1>ini content2</h1>
          </div>
        </div>
        <div className='row sub-menu'>
          <div className='col-10'>Simpul</div>
          <div className='col-2'><FaIcons.FaCaretDown /></div>
        </div>
        <div className='row sub-menu'>
          <div className='col-10'>Cari</div>
          <div className='col-2'><FaIcons.FaCaretDown /></div>
        </div>
        <div className='row sub-menu'>
          <div className='col-10'>URL</div>
          <div className='col-2'><FaIcons.FaCaretDown /></div>
        </div>
        <div className='row sub-menu'>
          <div className='col-10'>File</div>
          <div className='col-2'><FaIcons.FaCaretDown /></div>
        </div>
      </div>
    </div>
  )
}

export default AddData