
import React, {useState} from 'react'


function Accordion() {

  return (
        
                  <div className="container">
                  <div className="faq">

                    <div className="faq-cards">
                    <div className="questions">
                    <p>FRÅGA</p>
                    <button className="btn-round">
                    <i className="bi bi-chevron-down"></i>
                    </button>
                    </div>
                    <div className="answer"> 
                    SVAR
                </div>

                    <div className="faq-cards"> 
                    <div className="questions">
                    <p>FRÅGA</p>
                    <button className="btn-round">
                    <i className="bi bi-chevron-down"></i>
                    </button>
                    </div>
                    <div className="answer"> 
                    SVAR
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Accordion
