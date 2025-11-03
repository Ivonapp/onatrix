import React from 'react'
import Phoneicon from '../assets/images/Phoneicon.svg';

function Iconlayout({ icon, title, text }) {
  return (
    <div>
        

        <div className="phone-icon-text-wrapper2">
            <div className="phoneicon-circle">
            <img src={icon} alt="icon" className="phoneicon" />
            </div>
            <div className="phone-icon-wrapper"> 
            <h5 className="phone-icon-text">{title}</h5>
            <a href="tel:+46812312244" className="phone-icon-number">{text}</a>
            </div>
        </div>
    </div>
  )
}

export default Iconlayout