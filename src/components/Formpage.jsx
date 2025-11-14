import React from 'react'
import Form from './Form'
import Contactus from '../assets/images/Contactus.jpg';


function Formpage() {
  return (
    <div>


<div className="container">


<div className="box-form-container"> 
<img src={Contactus} alt="StorAid employee helping a customer with their storage unit" className="logo" />
            
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Formpage