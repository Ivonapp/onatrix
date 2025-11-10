import React from 'react'
import Footericon from '../assets/images/Footericon.svg';

function Footer() {
  return (
    <div>

    <footer>
    <div className ="footer-background-color">
      <div className="container"> 
    <div className="footer-wrapper">
    <div className="footer-holder"> 
    <p>&copy; 2025 StorAid, All rights reserved.</p>
    </div>

    
    <div className="footer-icon">

    <a href="/Errorpage">
    <img className="small-icon" src={Footericon} alt="small icon" />
    <div>Terms & Conditions</div>
    </a>
    <a href="/Errorpage">
    <img className="small-icon" src={Footericon} alt="small icon" />
    <span>Privacy Policy</span>
    </a>
    </div>

    </div>
    </div>
    </div>
    </footer>
    </div>
    
  )
}

export default Footer