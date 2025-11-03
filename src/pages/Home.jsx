import React from 'react'
import HeroLarge from '../components/HeroLarge'
import Box1 from '../components/Box1'
import Logoipsum from '../components/Logoipsum'
import Servicescolumns from '../components/Servicescolumns';
import Chooseus from '../components/Chooseus'
import Pricingplan from '../components/Pricingplan'
import Greentext from '../components/Greentext'
import Blogs from '../components/Blogs'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
       <div>
      <HeroLarge />
      <Box1 />
      <Logoipsum />
      <Servicescolumns />
      <Testimonials />
      <Chooseus />
      <Pricingplan />  
      <Greentext 
      greentitle ="Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us."
      greeningresse ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />
      <Blogs />
    

    </div>
  )
}

export default Home