import React from 'react'

function Titlelayout({ title, middletitle, ingress }) {
  return (
    <div className="container">
        <div className="titlelayout-container"> 
        <h4 className="chooseus-yellow-title">{title}</h4>
            <div className="chooseus-title-container">
                <h3 className="chooseus-green-title">{middletitle}</h3>
                    <div className="chooseus-ingress">{ingress}</div>
                </div>
            </div>
        </div>
  )
}

export default Titlelayout