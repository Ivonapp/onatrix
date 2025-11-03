import React from 'react'
import HeroSmall from '../components/HeroSmall'
import Titlelayout from '../components/Titlelayout'
import Chooseus from '../components/Chooseus'
import Greentext from '../components/Greentext'
import Accordion from '../components/Accordion'
import Formpage from '../components/Formpage'

const Booking = () => {
  return (
    <div>

      <HeroSmall 
      headline ="Booking"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Titlelayout
      title="Booking Unit"
      middletitle="Book Your Storage Unit Now & Simplify Your Life!"
      ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />
      <Formpage />
      <Chooseus />
      <Greentext 
      greentitle ="Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us."
      greeningresse ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />

      <Accordion />

    </div>
  )
}

export default Booking