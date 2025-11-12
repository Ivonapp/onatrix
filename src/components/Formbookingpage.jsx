import React from 'react'
import Formbooking from './Formbooking'
import Bookbox from '../assets/images/Bookbox.jpg';


function Formbookingpage() {
  return (
    <div>


<div className="container">


<div className="box-form-booking-container"> 
<img src={Bookbox} alt="graybox" className="logo" />
            
                <Formbooking />
            </div>
        </div>
    </div>
  )
}

export default Formbookingpage