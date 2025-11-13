import React from 'react'
import HeroSmall from '../components/HeroSmall'
import Socialmediapage from '../components/Socialmediapage'
import Faq from '../components/Faq'
import Formpage from '../components/Formpage'
import Titlelayout from '../components/Titlelayout'


const ContactUs = () => {
  return (
    <div> 
      
      <HeroSmall 
      headline ="Contact Us"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      
      <div className="container"> 
      <div className="title-layout-container">
      <Titlelayout
      title="Get in Touch"
      middletitle="Get Personalized Assistance – Contact Us"
      />
      <div className="contact-us-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</div>
      </div></div>
      <Formpage />
      <Socialmediapage />
      <Faq />
    </div>
  )
}

export default ContactUs