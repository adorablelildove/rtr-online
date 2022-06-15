import React, { useState } from 'react';


export default ({handleChange, handleSubmit, post}) => {
  const [nasIsActive, setNasIsActive] = useState(true);
  const [daeIsActive, setDaeIsActive] = useState(false);

  // WILAYAH
  const [optionsWilayahOpen, setOpstionsWilayahOpen] = useState(false);

  const wilayahSelected = document.querySelector("#wilayah-selected");
  const wilayahOptionsContainer = document.querySelector("#wilayah-options-container");
  const wilayahOptionsList = document.querySelectorAll("#wilayah-option");

  wilayahOptionsList.forEach(wilayah => {
    wilayah.addEventListener("click", () => {
      wilayahSelected.innerHTML = wilayah.querySelector("#wilayah-label").innerHTML;
      wilayahOptionsContainer.classList.remove("active");
      setOpstionsWilayahOpen(!optionsWilayahOpen);
    });
  });

  const provSum = "003_RTR_PROVINSI_PULAU_SUMATERA/_1000_PROVINSI_SUMATERA_PR_PERDA/";

  return (
    <div className='row'>
      <form className='pd-top-10'>
        {/* Kategori */}
        <div className='form-section row'>
          <div className='section-label'>
            <span>Pilih Kategori RTR</span>
          </div>
          <ul className='radio-type'>
            <li>
              <input type='radio' checked={nasIsActive ? 'checked' : ''} id='nasional' name='kategori' />
              <label for='nasional' onClick={() => {setNasIsActive(true); setDaeIsActive(false)}}>Nasional</label>
            </li>
            <li>
              <input type='radio' checked={daeIsActive ? 'checked' : ''}  id='daerah' name='kategori' />
              <label for='daerah' onClick={() => {setDaeIsActive(true); setNasIsActive(false); {}}}>Daerah</label>
            </li>
          </ul>
        </div>

        <div className='form-section row'>
          <div className='section-label'>
            <span>Pilih Jenis RTR</span>
          </div>

          {/* Jenis Nasional */}
          {nasIsActive &&
          <ul className='radio-type'>
            <li>
              <input type='radio' id='rtrwn' name='jenis' />
              <label for='rtrwn'>RTRWN</label>
            </li>
            <li>
              <input type='radio' id='rtrpulau' name='jenis' />
              <label for='rtrpulau'>RTR Pulau</label>
            </li>
            <li className='pd-top-8'>
              <input type='radio' id='rtrksn' name='jenis' />
              <label for='rtrksn'>RTR Kawasan Strategi Nasional</label>
            </li>
          </ul>}

        {/* Jenis Daerah */}
        {daeIsActive &&
        <ul className='radio-type'>
          <li>
            <input type='radio' id='rtrw-prov' name='jenis' />
            <label for='rtrw-prov'>RTRW Provinsi</label>
          </li>
          <li>
            <input type='radio' id='rtrw-kab' name='jenis' />
            <label for='rtrw-kab'>RTRW Kabupaten/Kota</label>
          </li>
          <li className='pd-top-8'>
            <input type='radio' id='rdtr-kab' name='jenis' />
            <label for='rdtr-kab'>RDTR Kabupaten/Kota</label>
          </li>
        </ul>}
        </div>

        {/* Wilayah */}
        <div className='form-section row'>
          <div className='section-label'>
            <span>Pilih Wilayah</span>
          </div>
          <div className='select-box' >
            <div className={optionsWilayahOpen ? 'options-container active' : 'options-container'} id='wilayah-options-container'>
              <div className='option' id='wilayah-option'>
                <input 
                  type='radio' 
                  class='radio' 
                  id='wilayah1' 
                  name='wilayah'
                  value="003_RTR_PROVINSI_PULAU_SUMATERA/_1000_PROVINSI_SUMATERA_PR_PERDA/"
                  onChange={handleChange}
                />
                <label for='wilayah1' id='wilayah-label'>Provinsi Sumatera</label>
              </div>

            </div>

            <div className='s-selected' id='wilayah-selected' onClick={() => setOpstionsWilayahOpen(!optionsWilayahOpen)}>
              Pilih wilayah
            </div>

          </div>
        </div>

        {/* Kategori */}
        <div className='form-section row pd-top-10'>
          <div className='section-label'>
            <span>Pilih Jenis Tata Ruang</span>
          </div>
          <ul className='radio-type'>
            <li>
              <input type='radio' id='sr' name='jenis-tr' />
              <label for='sr'>Struktur Ruang</label>
            </li>
            <li>
              <input type='radio' id='pr' name='jenis-tr' />
              <label for='pr'>Pola Ruang</label>
            </li>
          </ul>
        </div>

        <div className='submit-section row'>
          <input type='submit' value='Konfirmasi' onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  )

}