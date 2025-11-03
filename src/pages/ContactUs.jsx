import React from 'react'
import HeroSmall from '../components/HeroSmall'
import Socialmediapage from '../components/Socialmediapage'
import Accordion from '../components/Accordion'
import Formpage from '../components/Formpage'
import Titlelayout from '../components/Titlelayout'


const ContactUs = () => {
  return (
    <div>
      
      <HeroSmall 
      headline ="Contact Us"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Titlelayout
      title="Get in Touch"
      middletitle="Get Personalized Assistance – Contact Us"
      ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"
      />
      <Formpage />
      <Socialmediapage />
      <Accordion />

    </div>
  )
}

export default ContactUs