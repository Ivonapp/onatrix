import React from 'react'
import Pricingplancolumn from './Pricingplancolumn';
import Titlelayout from './Titlelayout';





function Pricingplan() {
  return (
    <div>
        <div className="container">

                    <Titlelayout
                        title ="Pricing Plan"
                        middletitle ="Find the Perfect Plan for Your Storage Needs"
                    />

                <div className="pricingplan-container">
                    <Pricingplancolumn 
                        pricetext = "Small Unit"
                        amounttext = "50"
                    />

                    <Pricingplancolumn 
                        pricetext = "Medium Unit"
                        amounttext = "100"
                    />

                    <Pricingplancolumn 
                        pricetext = "Large Unit"
                        amounttext = "150"
                    />

                    <Pricingplancolumn 
                        pricetext = "Executive Unit"
                        amounttext = "200"
                    />
            </div>
        </div>
    </div>
  )
}

export default Pricingplan