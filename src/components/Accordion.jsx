import React, { useState } from 'react'

const AccordionItem = ({item}) => {

const [isOpen, setIsOpen] = useState(false)

const toggleAccordion = () => {
  setIsOpen(!isOpen)
}
  return (
    
    <div className ="accordion-item">
    <div className={`item-titlebar ${isOpen ? 'active': ''}`} onClick={toggleAccordion}>
    <div className="accordion-title">{item.title}</div>
    <div className="btn btn-accordion">
      <i className={`item-content ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>

    </div>
    </div>
    {
      isOpen && ( 
      <p className="item-content">
        {item.description}
      </p>
          )
        }
    </div>

  )
}

export default AccordionItem