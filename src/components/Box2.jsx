import React from 'react'
import "./Adesign.css"
import { Link } from 'react-router-dom'
import Phoneicon from '../assets/images/Phoneicon.svg'
import Buttondark from './Buttondark'
import Yellowborder from './Yellowborder'
import Iconlayout from './Iconlayout'


function Box2() {
  return (
    <div>
        

    <div className="container">
    <div className="positioning-wrapper">
      
    <div className="positionering2">
    <div className="positionering-text"> 
    <h4 className="yellow-title">About Us</h4>
    <h3 className="green-title">Providing a Safe Space for Your Treasured Items</h3>
    <div className="green-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</div>
    </div>
  

<div className="vm-wrapper"> 
    
<Yellowborder 
  title="Vision" 
  ingress="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."  
/>

<Yellowborder 
  title="Mission" 
  ingress="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."  
/>
    </div>

    <div className="button-icon-wrapper">
    <Link to="/Aboutus">
    <Buttondark
    text="Discover More"
    />
    </Link>

    


    <div className="phone-icon-text-wrapper">
    <Iconlayout 
    icon = {Phoneicon}
    title = "More Information"
    text = "+46 8 123 122 44"
    />
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Box2