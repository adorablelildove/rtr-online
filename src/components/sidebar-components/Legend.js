import React, {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';

const layerData = [
  { name: "Sublayer 1" }, 
  { name: "Sublayer 2" }, 
  { name: "Sublayer 3" }, 
  { name: "Sublayer 4" }
];

function Legend() {

  const [layers, setLayers] = useState([]);
  useEffect(() => {
    setLayers(layerData);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  const [childIsOpen, setChildIsOpen] = useState(false);
  

  return (
    <div className="layerlist-container row h-80vh bg-white">
      <div className='layers-container col'>
        <div className='row pd-top-15'></div>
        <div className='lg-parent row'>
          <span>Parent layer</span>
        </div>
        <div className='lg-child row'>
          <div className='col left-10'>
            <FaIcons.FaCaretRight 
              className={childIsOpen ? 'icon-show' : 'icon-close'} 
              onClick={() => setChildIsOpen(!childIsOpen)} 
            />
            <span>Child Layer</span>
          </div>
        </div>
        {layers.map((layer) => (
        <div className={childIsOpen ? 'lg-subchild show row' : 'lg-subchild close row'}>
          <div className='col left-20'>
            <span>{layer.name}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Legend