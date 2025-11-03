import React from 'react'
import Facebook from '../assets/images/Facebook.svg';
import Twitter from '../assets/images/Twitter.svg';
import Instagram from '../assets/images/Instagram.svg';
import Youtube from '../assets/images/Youtube.svg';

function Socialmedia() {
  return (
    <div>
        
 <div className="right-icons">
      <a href="https://www.facebook.com"> <img src={Facebook} alt="Facebook" className="icon" />
      </a>
      <a href="https://www.twitter.com"> <img src={Twitter} alt="Twitter" className="icon" />
      </a>
      <a href="https://www.instagram.com"> <img src={Instagram} alt="Instagram" className="icon" />
      </a>
      <a href="https://www.youtube.com"> <img src={Youtube} alt="Youtube" className="icon" />
      </a>
      </div>
    </div>
  )
}

export default Socialmedia