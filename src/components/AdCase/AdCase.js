import React from 'react';
import './AdCase.css';

function AdCase({text = false}) {
  return (
    <div className="ad-case">
      {text && <h5>- Continua após a publicidade -</h5>}
      <div className='ad-image'></div>
    </div>
  )
}

export default AdCase