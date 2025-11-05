import React, { useState } from 'react'

const Blogaccordion = ({item}) => {

const [isOpen, setIsOpen] = useState(false)

const toggleblog = () => {
  setIsOpen(!isOpen)
}
  return (
    


    
    <div className ="blog-accordion-item">
    <div className={`item-blog-title ${isOpen ? 'active': ''}`} onClick={toggleblog}>
    <div className="column-ingress">{isOpen ? item.description : item.description.substring(0, 100) + '...'}</div> {/*{isOpen ? item.description : item.description.substring(0, 100) + '...'} <- Denna kodraden för att dölja lite av ingressen i blogcolumns tills man trycker "open" är med CHATGPT*/}
    <div className="column-yellow-ingress"> {isOpen ? 'Read less' : 'read more →'}</div>
  
        </div>
    </div>
  )
}

export default Blogaccordion
