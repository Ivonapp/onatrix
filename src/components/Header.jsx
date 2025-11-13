import React from 'react'
import "./Adesign.css"
import { NavLink, Link } from 'react-router-dom'
import Buttondark from './Buttondark'
import Brev from '../assets/images/Brev.svg'
import Telefon from '../assets/images/Telefon.svg'
import Logostoragecompany from '../assets/images/Logostoragecompany.svg'
import Socialmedia from '../components/Socialmedia'



export default function Header() {
  return (
    <header>

      <div className="header-color">
      <div className="left-icons">
      <img src={Telefon} alt="" aria-hidden="true" className="logo" />
      <a href="tel:+46812312244" className="phone" aria-label="Call us at plus forty-six eight one two three one two two four four">
      +46 8 123 122 44
      </a>

      <div className="contact-info">
      <img src={Brev} alt="" aria-hidden="true" className="logo" />
      <a href="mailto:contact@domain.com" className="email" aria-label="Send an email to contact at domain dot com">
      contact@domain.com
      </a>
      </div>
      </div>

      <Socialmedia />
    </div>
    
      <div className="middle-section">
      <div className="bottom-icon">

        <Link to="/home" aria-label="Go to home page">
          <img src={Logostoragecompany} alt="" aria-hidden="true" className="logo" />
        </Link>
      </div>

    <nav className="navbar">
    <div className="nav-links">
    <NavLink className="nav-link" to="/Home">Home</NavLink>
    <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
    <NavLink className="nav-link" to="/Services">Services</NavLink>
    <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
    </div>
    </nav>



    <Link to="/Booking">
    <Buttondark
    text ="Book Now"
    />
    </Link>    
    </div>

    </header>
  )
}


