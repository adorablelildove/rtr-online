import React, { useState } from 'react'

function Simpul() {

  // SIMPUL
  const [optionsSimpulOpen, setOpstionsSimpulOpen] = useState(false);

  const simpulSelected = document.querySelector("#simpul-selected");
  const simpulOptionsContainer = document.querySelector("#simpul-options-container");
  const simpulOptionsList = document.querySelectorAll("#simpul-option");

  simpulOptionsList.forEach(simpul => {
    simpul.addEventListener("click", () => {
      simpulSelected.innerHTML = simpul.querySelector("#simpul-label").innerHTML;
      simpulOptionsContainer.classList.remove("active");
      setOpstionsSimpulOpen(!optionsSimpulOpen);
    });
  });

  // SERVER
  const [optionsServerOpen, setOpstionsServerOpen] = useState(false);

  const serverSelected = document.querySelector("#server-selected");
  const serverOptionsContainer = document.querySelector("#server-options-container");
  const serverOptionsList = document.querySelectorAll("#server-option");

  serverOptionsList.forEach(server => {
    server.addEventListener("click", () => {
      serverSelected.innerHTML = server.querySelector("#server-label").innerHTML;
      serverOptionsContainer.classList.remove("active");
      setOpstionsServerOpen(!optionsServerOpen);
    });
  });

  return (
    <div className='row'>
        <form className='pd-top-10'>
          {/* SIMPUL */}
          <div className='form-section row'>
            <div className='section-label'>
              <span>Pilih Simpul</span>
            </div>
            <div className='select-box' >
              <div className={optionsSimpulOpen ? 'options-container active' : 'options-container'} id='simpul-options-container'>
                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul1' name='simpul' />
                  <label for='simpul1' id='simpul-label'>simpul 1</label>
                </div>

                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul2' name='simpul' />
                  <label for='simpul2' id='simpul-label'>simpul 2</label>
                </div>

                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul3' name='simpul' />
                  <label for='simpul3' id='simpul-label'>simpul 3</label>
                </div>

                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul4' name='simpul' />
                  <label for='simpul4' id='simpul-label'>simpul 4</label>
                </div>

                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul5' name='simpul' />
                  <label for='simpul5' id='simpul-label'>simpul 5</label>
                </div>

                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul6' name='simpul' />
                  <label for='simpul6' id='simpul-label'>simpul 6</label>
                </div>

                <div className='option' id='simpul-option'>
                  <input type='radio' class='radio' id='simpul7' name='simpul' />
                  <label for='simpul7' id='simpul-label'>simpul 7</label>
                </div>

              </div>

              <div className='s-selected' id='simpul-selected' onClick={() => setOpstionsSimpulOpen(!optionsSimpulOpen)}>
                Pilih simpul
              </div>
            </div>
          </div> 

          {/* SERVER */}
          <div className='form-section pd-top-10 row'>
            <div className='section-label'>
              <span>Pilih Server</span>
            </div>
            <div className='select-box' >
              <div className={optionsServerOpen ? 'options-container active' : 'options-container'} id='server-options-container'>
                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server1' name='server' />
                  <label for='server1' id='server-label'>server 1</label>
                </div>

                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server2' name='server' />
                  <label for='server2' id='server-label'>server 2</label>
                </div>

                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server3' name='server' />
                  <label for='server3' id='server-label'>server 3</label>
                </div>

                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server4' name='server' />
                  <label for='server4' id='server-label'>server 4</label>
                </div>

                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server5' name='server' />
                  <label for='server5' id='server-label'>server 5</label>
                </div>

                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server6' name='server' />
                  <label for='server6' id='server-label'>server 6</label>
                </div>

                <div className='option' id='server-option'>
                  <input type='radio' class='radio' id='server7' name='server' />
                  <label for='server7' id='server-label'>server 7</label>
                </div>
              </div>

              <div className='s-selected' id='server-selected' onClick={() => setOpstionsServerOpen(!optionsServerOpen)}>
                Pilih server
              </div>
            </div>
          </div>

        <div className='submit-section pd-top-10 row'>
          <input type='submit' value='Konfirmasi'/>
        </div>

        </form>
    </div>
  )
}

export default Simpul