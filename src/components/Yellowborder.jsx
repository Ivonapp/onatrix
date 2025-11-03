import React from 'react'

function Yellowborder({ title, ingress }) {
  return (
    <div>

        <div className="columns-container">
            <div className="border-container">
                <div className="yellow-border">
                    <div className="yellow-border-title">{title}</div>
                    <div className="yellow-border-ingress">{ingress}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Yellowborder