import React from 'react'

function File() {
  return (
    <div className='row'>
        <form className='form-section pd-top-10'>
          <div className='section-label'>
            <span>Upload File</span>
          </div>
          <div>
            <input type='file' name='fileUpload' id='fileUpload' />
          </div>
          <div className='submit-section row pd-top-10'>
          <input type='submit' value='Konfirmasi'/>
        </div>
        </form>
    </div>
  )
}

export default File