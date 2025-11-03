import React from 'react'
import Buttonlight from './Buttonlight';
import { Link } from 'react-router-dom';

function Pricingplancolumn({ pricetext, amounttext }) {
  return (
    <div>
        
<div className="border-pricing-container">
<div className="container">
<div className="width-container"> 
<h5 className="pricetext">{pricetext}</h5>

<div className="dollar-container">
<h4 className="dollar-sign">$</h4>
<h3 className="amounttext">{amounttext}</h3>
<h6 className="month">/month</h6>
</div>

<div className="pricing-ingress-text">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</div>

<hr />
</div>

 <div className="icon-columns-container">
                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Nam nec ipsum in dolor</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Fusce nec ligula ut arcu</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Aliquam pulvinar arcu in</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Duis gravida enim porta</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Etiam eget libero non ligula</p>
                </div>





                     <div className="buttons-container"> 

                            <Link to="/Booking">
                            <Buttonlight
                            text ="Rent Now"
                            />
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Pricingplancolumn