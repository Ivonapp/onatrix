import React from 'react'
import Form from './Form'
import Bookbox from '../assets/images/Bookbox.jpg';


function Formpage() {
  return (
    <div>


<div className="container">


<div className="box-form-container"> 
<img src={Bookbox} alt="StorAid employee helping a customer with their storage unit" className="logo" />
            
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Formpage