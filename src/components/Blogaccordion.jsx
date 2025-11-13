import React, { useState } from 'react'

const Blogaccordion = ({item, isOpen, toggleblog}) => {

  return (
  
    <div className ="blog-accordion-item">
    <div className={`item-blog-title ${isOpen ? 'active': ''}`} onClick={toggleblog}>
    <div className="column-ingress">{isOpen ? item.description : item.description.substring(0, 100) + '...'}</div> {/*Kodraden från: item-blog-title fram till pil-ikonerna är med hjälp av CHATGPT.*/}
    <div className="column-yellow-ingress"> {isOpen ? (
            <>Read less <i className="bi bi-arrow-left"></i></>
          ) : (
            <>Read more <i className="bi bi-arrow-right"></i></>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blogaccordion
