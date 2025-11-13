import React from 'react'
import Facebook from '../assets/images/Facebook.svg';
import Twitter from '../assets/images/Twitter.svg';
import Instagram from '../assets/images/Instagram.svg';
import Youtube from '../assets/images/Youtube.svg';

function Socialmedia() {
  return (
    <div>
        
 <div className="right-icons">
      <a href="https://www.facebook.com" aria-label="Visit StorAid on Facebook">
      <img src={Facebook} alt="" className="icon" aria-hidden="true" />
      </a>
      <a href="https://www.twitter.com" aria-label="Visit StorAid on Twitter"> 
      <img src={Twitter} alt="" className="icon" aria-hidden="true" />
      </a>
      <a href="https://www.instagram.com" aria-label="Visit StorAid on Instagram">
      <img src={Instagram} alt="" className="icon" aria-hidden="true" />
      </a>
      <a href="https://www.youtube.com" aria-label="Visit StorAid on Youtube">
       <img src={Youtube} alt="" className="icon" aria-hidden="true" />
      </a>
      </div>
    </div>
  )
}

export default Socialmedia