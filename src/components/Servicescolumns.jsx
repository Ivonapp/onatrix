import React from 'react'
import Yellowborder from './Yellowborder';
import graybox2 from '../assets/images/graybox2.svg';
import Titlelayout from './Titlelayout';


function Servicescolumns() {
  return (
    <div>
        
    <div className="container">
    <div className="column-margin">
    <Titlelayout
    title="Our Services"
    middletitle="Specialized Storage for Every Special Item"
    ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
    />

    <div className="columns-container">
        <div className="column-container">
                <Yellowborder 
                    title="Diverse Unit Sizes" 
                    ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  
                />
                <Yellowborder 
                    title="Moving Assistance" 
                    ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  
                />
            </div>


    <img src={graybox2} alt="logo" className="graybox2" />


<div className="column-container">
                <Yellowborder 
                    title="Vehicle Storage" 
                    ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  
                />
                <Yellowborder 
                    title="Top-Notch Security" 
                    ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  
                />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicescolumns