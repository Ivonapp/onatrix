import React, { useEffect, useState } from 'react'
import AccordionItem from './Accordion'


const Faq = () => {
    const [accordionfaq, setAccordionfaq] = useState([])
  
    const fetchFaq = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
        const data = await res.json()
        setAccordionfaq(data)
    }

    useEffect(() => {
        fetchFaq()

    }, [])
  
    return (
    <div>

 <div className="container"> 

       

<div className="accordion-wrapper">
{
    accordionfaq.map(item => (
        <AccordionItem key={item.id} item={item} />
                
                ))
            }
        </div>
    </div>
</div>
  )
}

export default Faq