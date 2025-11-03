import React from 'react'
import HeroSmall from '../components/HeroSmall'
import Box1 from '../components/Box1'
import Logoipsum from '../components/Logoipsum'
import Testimonials from '../components/Testimonials'
import Chooseus from '../components/Chooseus'


const AboutUs = () => {
  return (
    <div>
      <HeroSmall 
      headline ="About Us"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />

    <Box1 />
    
    <Logoipsum />
    <Testimonials />
    <Chooseus />
      

    </div>
  )
}

export default AboutUs