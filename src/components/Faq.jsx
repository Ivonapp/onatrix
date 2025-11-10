import React, { useEffect, useState } from 'react'
import AccordionItem from './Accordion'
import Accordiontitle from './Accordiontitle'


const Faq = () => {
    const [accordionfaq, setAccordionfaq] = useState([])
    const [openId, setOpenId] = useState(null)

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
            <div className="faq-wrapper">
        <div className="accordion-title-left">
       <Accordiontitle
       title="FAQs"
       middletitle="Frequently Ask Questions"
       ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        </div>

        <div className="accordion-wrapper">
        {
        accordionfaq.map(item => (
        <AccordionItem key={item.id} item={item} 
        isOpen={openId === item.id}
        toggleAccordion={() => setOpenId(openId === item.id ? null : item.id)} /* isOpen={openId === item.id} OCH toggleAccordion={() => setOpenId(openId === item.id ? null : item.id)} var med CHATGPTs hjälp*/
        />
                ))
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default Faq