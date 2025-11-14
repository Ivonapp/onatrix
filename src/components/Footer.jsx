import React from 'react'
import Footericon from '../assets/images/Footericon.svg';
import { Link } from 'react-router-dom';

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

     <Link to="/Errorpage" className="white-link">
    <img className="small-icon" src={Footericon} alt="small icon" />
    <span>Terms & Conditions</span>
    </Link>
     <Link to="/Errorpage" className="white-link">
    <img className="small-icon" src={Footericon} alt="small icon" />
    <span>Privacy Policy</span>
    </Link>
    </div>

    </div>
    </div>
    </div>
    </footer>
    </div>
    
  )
}

export default Footer