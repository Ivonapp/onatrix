import React from 'react'

function ChooseusColumn({ icon, title, ingress }) {
  return (
    <div>




<div className="choose-us-column">
            <img className="choose-us-icon" src={icon} alt="small icon"/>
                <div className="choose-us-text-section">
                    <h5 className="choose-us-title">{title}</h5>
                    <p className="choose-us-ingress">{ingress}</p>
                </div>
            </div>
      </div>
  )
}

export default ChooseusColumn