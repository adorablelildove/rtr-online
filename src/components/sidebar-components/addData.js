import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import Rtr from './add-data-contents/Rtr';
import Simpul from './add-data-contents/Simpul';
import Cari from './add-data-contents/Cari';
import Url from './add-data-contents/Url';
import File from './add-data-contents/File';

function AddData() {   

  // Expand-collapse submenu contents
  const [rtrIsOpen, setRtrIsOpen] = useState(false);
  const [simpulIsOpen, setSimpulIsOpen] = useState(false);
  const [cariIsOpen, setCariIsOpen] = useState(false);
  const [urlIsOpen, setUrlIsOpen] = useState(false);
  const [fileIsOpen, setFileIsOpen] = useState(false);

  return (
    <div className="add-data-container row h-80vh">
      <div className='col'>

        {/* SUB MENU RTR */}
        <div className={rtrIsOpen ? 'row sub-menu show' : 'row sub-menu'} onClick={() => setRtrIsOpen(!rtrIsOpen)}>
          <div className='col-10'>Rencana Tata Ruang (RTR)</div>
          <div className='icon-menu col'><FaIcons.FaCaretRight className={rtrIsOpen ? 'icon-show' : 'icon-close'} /></div>
        </div>
        <div className='content-container row'>
          <div className={rtrIsOpen ? 'submenu-content show col' : 'submenu-content close col'}>
            <Rtr /> 
          </div>
        </div>

        {/* SUB MENU SIMPUL */}
        <div className={simpulIsOpen ? 'row sub-menu show' : 'row sub-menu'} onClick={() => setSimpulIsOpen(!simpulIsOpen)}>
          <div className='col-10'>Simpul</div>
          <div className='icon-menu col'><FaIcons.FaCaretRight className={simpulIsOpen ? 'icon-show' : 'icon-close'} /></div>
        </div>
        <div className='content-container row'>
          <div className={simpulIsOpen ? 'submenu-content show col' : 'submenu-content close col'}>
            <Simpul />
          </div>
        </div>

        {/* SUB MENU CARI */}
        <div className={cariIsOpen ? 'row sub-menu show' : 'row sub-menu'} onClick={() => setCariIsOpen(!cariIsOpen)}>
          <div className='col-10'>Cari</div>
          <div className='icon-menu col'><FaIcons.FaCaretRight className={cariIsOpen ? 'icon-show' : 'icon-close'} /></div>
        </div>
        <div className='content-container row'>
          <div className={cariIsOpen ? 'submenu-content show col' : 'submenu-content close col'}>
            <Cari />
          </div>
        </div>

        {/* SUB MENU URL */}
        <div className={urlIsOpen ? 'row sub-menu show' : 'row sub-menu'} onClick={() => setUrlIsOpen(!urlIsOpen)}>
          <div className='col-10'>URL</div>
          <div className='icon-menu col'><FaIcons.FaCaretRight className={urlIsOpen ? 'icon-show' : 'icon-close'} /></div>
        </div>
        <div className='content-container row'>
          <div className={urlIsOpen ? 'submenu-content show col' : 'submenu-content close col'}>
            <Url />
          </div>
        </div>

        {/* SUB MENU FILE */}
        <div className={fileIsOpen ? 'row sub-menu show' : 'row sub-menu'} onClick={() => setFileIsOpen(!fileIsOpen)}>
          <div className='col-10'>File</div>
          <div className='icon-menu col'><FaIcons.FaCaretRight className={fileIsOpen ? 'icon-show' : 'icon-close'} /></div>
        </div>
        <div className='content-container row'>
          <div className={fileIsOpen ? 'submenu-content show col' : 'submenu-content close col'}>
            <File />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddData