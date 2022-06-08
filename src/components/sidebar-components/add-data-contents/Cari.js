import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import Searchmap from './cari-component/Searchmap';
import Modal from 'react-modal';

function Cari() {
  
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      response => response.json().then(data => {
        setImages(data);
      })
    )
  }, []);

  return (
    <div className='row pd-top-10'>
      <div className='form-section pd-bottom-10'>
        <div className='tools-cari row'>
          <div className='search-box col-8'>
          <form>
            <div className='row'>
              <div className='col-10'>
                  <input type='text' placeholder='Cari...' />
              </div>
              <div className='search-icon col-1'>
                <button type='submit'><FaIcons.FaSearch /></button>
              </div>
            </div>
            </form>
          </div>
          <div className='col-3 tools-filter' onClick={toggleModal}>
              <div className='filter-icon'>
                <FaIcons.FaFilter />
              </div>  
              <div className='filter-button'>
                <span>Filter</span>
              </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="searchmap-modal"
        overlayClassName="overlay"
      >
        <div className='heading-modal row'>
          <div className='col-10'>
            <span>Filter</span>
          </div>
          <div className='close-icon col-2' onClick={toggleModal}>
           <a><FaIcons.FaTimes /></a>
          </div>
        </div>
        <div className='body-modal row'>
          <form>
            <label className='label-modal'>Tipe</label>
              <ul className='radio-type'>
                <li>
                  <input type='checkbox' id='map-sv' name='tipe' />
                  <label for='map-sv'>Map Service</label>
                </li>
                <li>
                  <input type='checkbox' id='feature-sv' name='tipe' />
                  <label for='feature-sv'>Feature Service</label>
                </li>
                <li>
                <input type='checkbox' id='wms' name='tipe' />
                  <label for='wms'>WMS</label>
                </li>
                <li className='pd-top-5'>
                  <input type='checkbox' id='vtile-sv' name='tipe' />
                  <label for='vtile-sv'>Vector Tile Service</label>
                </li>
                <li className='pd-top-5'>
                  <input type='checkbox' id='image-sv' name='tipe' />
                  <label for='image-sv'>Image Service</label>
                </li>
                <li className='pd-top-5'>
                  <input type='checkbox' id='kml' name='tipe' />
                  <label for='kml'>KML</label>
                </li>
              </ul>


            <label className='label-modal'>Urutkan</label>
            <ul className='radio-type'>
              <li>
                <input type='radio' id='relevance' name='sortby' />
                <label for='relevance'>Relevance</label>
              </li>
              <li>
                <input type='radio' id='title' name='sortby' />
                <label for='title'>Title</label>
              </li>
              <li>
                <input type='radio' id='owner' name='sortby' />
                <label for='owner'>Owner</label>
              </li>
              <li>
                <input type='radio' id='rating' name='sortby' />
                <label for='rating'>Rating</label>
              </li>
              <li>
                <input type='radio' id='views' name='sortby' />
                <label for='views'>Views</label>
              </li>
              <li className='pd-top-5'>
                <input type='radio' id='date' name='sortby' />
                <label for='date'>Date</label>
              </li>
            </ul>


            <label className='label-modal'>Map</label>
            <ul className='radio-type'>
              <li>
                <input type='radio' id='within-map' name='map' />
                <label for='within-map'>Within Map</label>
              </li>
              <li>
                <input type='radio' id='without-map' name='map' />
                <label for='without-map'>Without Map</label>
              </li>
            </ul>


          </form>
        </div>
        <div className='bottom-modal row'>
          <div className='submit-modal col-12'>
          <input type='submit' value='Konfirmasi'onClick={toggleModal}/>
          </div>
        </div>
      </Modal>


      <Searchmap data={ images }/>

      <div className='end pd-bottom-10'></div>
    </div>
  )
}

export default Cari