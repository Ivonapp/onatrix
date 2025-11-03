import React from 'react'
import Iconlayout from './Iconlayout';
import Socialmedia from './Socialmedia';
import Phoneicon from '../assets/images/Phoneicon.svg';
import Brev2 from '../assets/images/Brev2.svg';
import Location from '../assets/images/Location.svg';
import Gubbe2 from '../assets/images/Gubbe2.svg';

function Socialmediapage() {
  return (
    <div>
        
<div className="socialmedia-backgroundcolor">        
                    <div className="container">

<div className="socialmedia-container">
            <div classname="socialmedia-column">
                <div className="logogubbe"> 
                    <img src={Gubbe2} alt="Logotyp" className="logo" /> 
                </div></div>


<div className="socialmedia-border-column">
    <div className="socialmedia-border">
 <div className="socialmedia-ingress-column">              
                <h3 className="socialmedia-title">Find Us On:</h3>
                <div className="socialmedia-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
</div> 
<div className="socialmedia-icon-column">
    <div className="socialmedia-iconlayout">               
            <Iconlayout 
                icon = {Phoneicon}
                title ="Call Center"
                text ="+46 8 123 122 44"
                />
<div className="socialmedia-iconlayout">
            <Iconlayout 
                icon = {Brev2}
                title ="Email Adress"
                text ="contact@domain.com"
            />
<div className="socialmedia-iconlayout">
                <Iconlayout 
                icon = {Location}
                title ="Location"
                text ="Klarabergsviadukten 90, Stockholm"
            />
</div>
</div>
</div>
        </div>



        <div className="socialmedia-text-column">
        <h5 className="socialmedia-oursocialmedia">Our Social Media</h5>
                <div className="socialmedia-line"></div>
                 <Socialmedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Socialmediapage