import React from 'react'
import Form from './Form'
import Bookbox from '../assets/images/Bookbox.jpg';


function Formpage() {
  return (
    <div>


<div className="container">


<div className="box-form-container"> 
<img src={Bookbox} alt="graybox" className="logo" />
            
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Formpage