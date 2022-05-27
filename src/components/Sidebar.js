import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import AddData from './sidebar-components/AddData';
import LayerList from './sidebar-components/LayerList';
import Legend from './sidebar-components/Legend';

const Sidebar = () => {
  // Expand-collapse animation sidebar
  const [isOpen, setIsOpen] = useState(true);  
  const [style, setStyle] = useState("expand-btn close");
  const collapsed = () => {
    setStyle(isOpen ? "expand-btn show" : "expand-btn close");
  }
  const expanded = () => {
    setStyle(isOpen ? "expand-btn show" : "expand-btn close");
  }

  // Change main menus 
  const [addDataIsOpen, setAddDataIsOpen] = useState(true);  
  const [layerListIsOpen, setLayerListIsOpen] = useState(false);
  const [legendIsOpen, setLegendIsOpen] = useState(false);  ;  

  return (
    <div className='main h-100vh'>
        <td className={style} onClick={() => {setIsOpen(!isOpen); expanded()}}>
          <a className='f-12 f-poppins spacing'>MENU</a>
        </td>

        {/* responsive sidebar */}
        <div className={isOpen ? "sidebar show" : "sidebar close"}>
        <div className="container">
          <div className='row h-20vh bg-header'>
            <div className='header-shadow col'>
              <div className='info row h-5vh'>
                <div className='col align-r'>
                <a><FaIcons.FaInfoCircle /></a>
                </div>
              </div>
              <div className='row h-10vh align-center-l'>
                <div className='col h-8vh f-poppins'>
                  <div className='row h-5vh align-center-l'>
                    <div className='col-2'>
                      <img src='logoATR.png' width={35} height={35}></img>
                    </div>
                    <div className='rtr col-10'>Rencana Tata Ruang</div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='row h-5vh align-center f-14 f-roboto'>
                    <div className={addDataIsOpen ? "main-menu show col" : "main-menu col"} onClick={() => {setAddDataIsOpen(true); setLayerListIsOpen(false); setLegendIsOpen(false)}}>ADD DATA</div>
                    <div className={layerListIsOpen ? "main-menu show col" : "main-menu col"} onClick={() => {setAddDataIsOpen(false); setLayerListIsOpen(true); setLegendIsOpen(false)}}>LAYER LIST</div>
                    <div className={legendIsOpen ? "main-menu show col" : "main-menu col"} onClick={() => {setAddDataIsOpen(false); setLayerListIsOpen(false); setLegendIsOpen(true)}}>LEGEND</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { addDataIsOpen && <AddData />}
          { layerListIsOpen && <LayerList />}
          { legendIsOpen && <Legend />}
        </div>
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