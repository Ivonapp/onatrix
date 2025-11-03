import React from 'react'

function Testimonialstitle( {title, middletitle, ingress }) {
  return (
    <div>
        

    <div className="container">
        <div className="testimonials-title-ingress"> 
        <h4 className="testimonials-yellow-title">{title}</h4>
                <h3 className="testimonials-white-title">{middletitle}</h3>
                    <div className="testimonials-small-ingress">{ingress}</div>
                </div>
            </div>



    </div>
  )
}

export default Testimonialstitle