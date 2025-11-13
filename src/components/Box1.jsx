import React from 'react'
import Box2 from '../components/Box2'
import Positionering1 from '../assets/images/Positionering1.jpg';
import Positionering2 from '../assets/images/Positionering2.svg';
function Box1() {
  return (
    <div>
        
<div className="container">
<div className="box-container">
<div className="box-container2">
<div className="box-1">
<div className="box-positioning">

<div className="gray-icon">
  <img src={Positionering1} alt="Two Storeaid employees organizing storage boxes" />
</div>
<div className="green-icon">
  <img src={Positionering2} alt="Icon representing years of experience, satisfied clients, and number of warehouses" />
</div>
           
           <div className="number-text-container"> 
            <div className="small-number-container"> 
            <h2 className="numbers">12+</h2>
            <div className="numbers-text">Years of Experience</div>
        </div>
    <div className="small-number-container"> 
        <h2 className="numbers">150k+</h2>
        <div className="numbers-text">Satisfied Clients</div>
    </div>
    <div className="small-number-container"> 
        <h2 className="numbers">35+</h2>
        <div className="numbers-text">Warehouse</div>
    </div>
</div>   
        
        
        </div>
  </div>


             
                    
                        





  <div className="box-2">

    <Box2 />
    </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Box1