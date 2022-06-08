import React, { useState } from 'react'

function Rtr() {

  const [nasIsActive, setNasIsActive] = useState(true);
  const [daeIsActive, setDaeIsActive] = useState(false);

  const [optionsOpen, setOpstionsOpen] = useState(false);

  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");

  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      setOpstionsOpen(!optionsOpen);
    });
  });

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
            <div className={optionsOpen ? 'options-container active' : 'options-container'}>
              <div className='option'>
                <input type='radio' class='radio' id='wilayah1' name='wilayah' />
                <label for='wilayah1'>Wilayah 1</label>
              </div>

              <div className='option'>
                <input type='radio' class='radio' id='wilayah2' name='wilayah' />
                <label for='wilayah2'>Wilayah 2</label>
              </div>

              <div className='option'>
                <input type='radio' class='radio' id='wilayah3' name='wilayah' />
                <label for='wilayah3'>Wilayah 3</label>
              </div>

              <div className='option'>
                <input type='radio' class='radio' id='wilayah4' name='wilayah' />
                <label for='wilayah4'>Wilayah 4</label>
              </div>

              <div className='option'>
                <input type='radio' class='radio' id='wilayah5' name='wilayah' />
                <label for='wilayah5'>Wilayah 5</label>
              </div>

              <div className='option'>
                <input type='radio' class='radio' id='wilayah6' name='wilayah' />
                <label for='wilayah6'>Wilayah 6</label>
              </div>

              <div className='option'>
                <input type='radio' class='radio' id='wilayah7' name='wilayah' />
                <label for='wilayah7'>Wilayah 7</label>
              </div>

            </div>

            <div className='s-selected' onClick={() => setOpstionsOpen(!optionsOpen)}>
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
          <input type='submit' value='Konfirmasi'/>
        </div>
      </form>
    </div>
  )
}

export default Rtr