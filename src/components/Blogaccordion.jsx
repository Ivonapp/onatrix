import React, { useState } from 'react'

const Blogaccordion = ({item}) => {

const [isOpen, setIsOpen] = useState(false)

const toggleblog = () => {
  setIsOpen(!isOpen)
}
  return (
    


    
    <div className ="blog-accordion-item">
    <div className={`item-blog-title ${isOpen ? 'active': ''}`} onClick={toggleblog}>
    {isOpen ? item.description : item.description.substring(0, 100) + '...'}
    <div className="column-yellow-ingress"> {isOpen ? 'Read less' : 'read more →'}</div>
  

    </div>

    </div>
  )
}

export default Blogaccordion
