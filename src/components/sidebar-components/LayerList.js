import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import RangeSlider from 'react-bootstrap-range-slider';
import * as FaIcons from 'react-icons/fa';
import * as Fi from 'react-icons/fi';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const layerData = [
  { name: "Sublayer 1" }, 
  { name: "Sublayer 2" }, 
  { name: "Sublayer 3" }, 
  { name: "Sublayer 4" }
];

function LayerList() {
  
  const [childIsOpen, setChildIsOpen] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  const [layers, setLayers] = useState([])
  
  useEffect(() => {
    setLayers(layerData);
  }, []);
  
  const handleChange = (e) => {
    const {name, checked} = e.target;
    if(name === "allSelect" || name === "allCheck"){
      let tempLayer = layers.map(layer => {
        return {...layer, isChecked : checked};
      });
      setLayers(tempLayer);
    } else {
      let tempLayer = layers.map((layer) => 
        layer.name === name ? {...layer, isChecked: checked} : layer
      );
      setLayers(tempLayer);
    }
  };

  const [ value, setValue ] = React.useState(25);

  
  return (
    <div className="layerlist-container row h-80vh bg-white">
      <div className='col pd-top-15'>
        <div className='layerlist-tools row'>
          <div className='ll-col-container col-5'>
            <input 
              type='checkbox' 
              id='allCheck' 
              className='form-check-input'
              name='allCheck'
              checked={layers.filter(layer => layer?.isChecked !== true).length  < 1}
              onChange={handleChange}
            />
            <label for='check'>Check All</label>
          </div>
          <div className='ll-col-container col-5'>
            <input 
              type='checkbox' 
              id='allExpand' 
              className='form-check-input'
              name='allExpand'
              onClick={() => setChildIsOpen(!childIsOpen)}
            />
            <label for='allExpand'>Expand All</label>
          </div>
        </div>
        
        <form className='ll-form-check'>
          <div className='ll-parents row pd-top-10'>
            <div className='col-1'>
              <FaIcons.FaCaretRight 
                className={childIsOpen ? 'icon-show' : 'icon-close'} 
                onClick={() => setChildIsOpen(!childIsOpen)} 
              />
            </div>
            <div className='ll-checkbox col-8'>
              <input 
                type='checkbox' 
                id='check' 
                className='form-check-input'
                name='allSelect'
                checked={layers.filter(layer => layer?.isChecked !== true).length  < 1}
                onChange={handleChange}
              />
              <label for='check'>Layer's Title</label>
            </div>
            <div className='ll-tools col-3'>
              <Fi.FiZoomIn className='ll-icon' />
              <Fi.FiMoreVertical className='ll-icon' onClick={toggleModal} />
            </div>
          </div>
          <div className={childIsOpen ? 'll-child show row' : 'll-child close row'}>
            <ul>
            {layers.map((layer) => (
              <li className='ll-checkbox child'>
                <input 
                type='checkbox' 
                id={layer.name} 
                name={layer.name} 
                checked={layer?.isChecked || false}
                onChange={handleChange} 
                />
                <label for={layer.name}>{layer.name}</label>
              </li>
            ))}
            </ul>
          </div>
        </form>
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
            <span>Settings</span>
          </div>
          <div className='close-icon col-2' onClick={toggleModal}>
            <a><FaIcons.FaTimes /></a>
          </div>
        </div>
        <div className='body-modal url row'>
          <span>Transparency</span>
          <Form>
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider
            value={value}
            onChange={e => setValue(e.target.value)}
            variant='warning'
            size='sm'
          />
        </Col>
        <Col xs="3">
          <Form.Control value={value} size='sm'/>
        </Col>
      </Form.Group>
    </Form> 
        </div>
        <div className='bottom-modal ll row'>
          <div className='submit-modal col-12'>
            <input type='submit' value='Konfirmasi' onClick={toggleModal}/>
          </div>
        </div>
      </Modal>
    </div>
              )
    }
    
    export default LayerList
    