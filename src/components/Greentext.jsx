import React from 'react'
import { Link } from 'react-router-dom';
import Buttonlight from './Buttonlight';

function Greentext({ greentitle, greeningresse }) {
  return (
    <div>            
        <div className="green-color-container">
            <div className="container">
                <div className="green-container">
                    <h3 className="greentitle">{greentitle}</h3>
                    <div className="greeningresse">{greeningresse}</div>
                    <div className="greenbutton">

                        <Link to="/Booking">
                        <Buttonlight
                        text ="Book Now"
                        />
                        </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Greentext