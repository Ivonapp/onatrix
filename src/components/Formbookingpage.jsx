import React from 'react'
import Formbooking from './Formbooking'
import Bookbox from '../assets/images/Bookbox.jpg';


function Formbookingpage() {
  return (
    <div>


<div className="container">


<div className="box-form-booking-container"> 
<img src={Bookbox} alt="StorAid employee helping a customer with their storage unit" className="logo" />
            
                <Formbooking />
            </div>
        </div>
    </div>
  )
}

export default Formbookingpage