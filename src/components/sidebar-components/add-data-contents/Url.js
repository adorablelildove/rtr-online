import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import Modal from 'react-modal';

function Url() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // SIMPUL
  const [optionsTipeOpen, setOpstionsTipeOpen] = useState(false);

  const tipeSelected = document.querySelector("#tipe-selected");
  const tipeOptionsContainer = document.querySelector("#tipe-options-container");
  const tipeOptionsList = document.querySelectorAll("#tipe-option");

  tipeOptionsList.forEach(tipe => {
    tipe.addEventListener("click", () => {
      tipeSelected.innerHTML = tipe.querySelector("#tipe-label").innerHTML;
      tipeOptionsContainer.classList.remove("active");
      setOpstionsTipeOpen(!optionsTipeOpen);
    });
  });

  return (
    <div className='row'>
        <form className='pd-top-10'>
          {/* TIPE */}
          <div className='form-section row'>
            <div className='section-label'>
              <span>Pilih Tipe</span>
            </div>
            <div className='select-box' >
              <div className={optionsTipeOpen ? 'options-container active' : 'options-container'} id='tipe-options-container'>
                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe1' name='tipe' />
                  <label for='tipe1' id='tipe-label'>tipe 1</label>
                </div>

                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe2' name='tipe' />
                  <label for='tipe2' id='tipe-label'>tipe 2</label>
                </div>

                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe3' name='tipe' />
                  <label for='tipe3' id='tipe-label'>tipe 3</label>
                </div>

                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe4' name='tipe' />
                  <label for='tipe4' id='tipe-label'>tipe 4</label>
                </div>

                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe5' name='tipe' />
                  <label for='tipe5' id='tipe-label'>tipe 5</label>
                </div>

                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe6' name='tipe' />
                  <label for='tipe6' id='tipe-label'>tipe 6</label>
                </div>

                <div className='option' id='tipe-option'>
                  <input type='radio' class='radio' id='tipe7' name='tipe' />
                  <label for='tipe7' id='tipe-label'>tipe 7</label>
                </div>

              </div>

              <div className='s-selected' id='tipe-selected' onClick={() => setOpstionsTipeOpen(!optionsTipeOpen)}>
                Pilih tipe
              </div>
            </div>
          </div> 

          {/* URL */}
          <div className='form-section pd-top-10'>
            <div className='section-label'>
              <span>URL</span>
            </div>
            <div className='row'>
          <div className='url-box col-12'>
            <div className='row'>
              <div>
                  <textarea placeholder='Masukkan url...' />
                <FaIcons.FaInfoCircle onClick={toggleModal} className='url-eg-icon'/>
              </div>
            </div>
          </div>
        </div>
          </div>
        </form>
        
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="searchmap-modal"
        overlayClassName="overlay"
      >
        <div className='heading-modal row'>
          <div className='col-10'>
            <span>Contoh URL</span>
          </div>
          <div className='close-icon col-2' onClick={toggleModal}>
           <a><FaIcons.FaTimes /></a>
          </div>
        </div>
        <div className='body-modal url row'>
          <ol>
            <li>
              <span>http://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0</span>
            </li>
            <li>
              <span>http://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Tapestry/MapServer</span>
            </li>
            <li>
              <span>http://imagery.arcgisonline.com/ArcGIS/rest/services/Land</span>
            </li>
          </ol>

        </div>
        <div className='bottom-modal url row'>
          <div className='submit-modal col-12'>
          <input type='submit' value='Tutup' onClick={toggleModal}/>
          </div>
        </div>
      </Modal>

      <div className='submit-section row pd-top-10'>
          <input type='submit' value='Konfirmasi'/>
        </div>
    </div>
  )
}

export default Url