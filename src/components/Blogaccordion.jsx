import React, { useState } from 'react'

const Blogaccordion = ({item}) => {

const [isOpen, setIsOpen] = useState(false)

const toggleblog = () => {
  setIsOpen(!isOpen)
}
  return (
    


    
    <div className ="blog-accordion-item">
    <div className={`item-blog-title ${isOpen ? 'active': ''}`} onClick={toggleblog}>

    <div className="column-yellow-ingress"> {isOpen ? 'Read less' : 'read more →'}</div>
  

    </div>
    

    
      {
      isOpen && ( 
      <p className="blog-content">
        {item.description}
      </p>
          )
        }

    </div>
  )
}

export default Blogaccordion
