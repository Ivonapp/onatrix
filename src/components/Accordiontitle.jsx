import React from 'react'

function Accordiontitle( {title, middletitle, ingress }) {
  return (
    <div>
        
        <h4 className="accordion-yellow-title">{title}</h4>
            <div className="accordion-title-container">
                <h3 className="accordion-green-title">{middletitle}</h3>
                    <div className="accordion-ingress">{ingress}</div>
                </div>
            </div>
  )
}

export default Accordiontitle