import React from 'react'
import Logoipsum1 from '../assets/images/Logoipsum1.svg';
import Logoipsum2 from '../assets/images/Logoipsum2.svg';
import Logoipsum3 from '../assets/images/Logoipsum3.svg';
import Logoipsum4 from '../assets/images/Logoipsum4.svg';
import Logoipsum5 from '../assets/images/Logoipsum5.svg';

function Logoipsum() {
  return (
    <div>

       
    <div className="logoipsum-background">
      <div className="container">
        <div className="logoipsum-flex">
    <div className="Logoipsum1">
    <img src={Logoipsum1} alt="logo" className="Logoipsum-icon" />
    </div>
    <div className="Logoipsum2">
    <img src={Logoipsum2} alt="logo" className="Logoipsum-icon" />
    </div>
    <div className="Logoipsum3">
    <img src={Logoipsum3} alt="logo" className="Logoipsum-icon" />
    </div>
    <div className="Logoipsum4">
    <img src={Logoipsum4} alt="logo" className="Logoipsum-icon" />
    </div>
    <div className="Logoipsum5">
    <img src={Logoipsum5} alt="logo" className="Logoipsum-icon" />
    </div>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Logoipsum