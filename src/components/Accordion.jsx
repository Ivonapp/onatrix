import React from 'react'

const AccordionItem = ({item}) => {
  return (
    <div className ="accordion-item">
    <div className="item-titlebar">
    <h3>{item.title}</h3>
    <div className="btn btn-accordion">
      <i className="bi bi-chevron-down"></i>

    </div>
    </div>
      <p className="item-content">
        {item.description}
      </p>
      
      </div>
  )
}

export default AccordionItem