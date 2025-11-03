import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Servicescolumns from '../components/Servicescolumns';
import Greentext from '../components/Greentext';
import Testimonials from '../components/Testimonials';
import Accordion from '../components/Accordion';

const Services = () => {
  return (
    <div>
      <HeroSmall 
      headline ="Services"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Servicescolumns />
      <Testimonials />
      <Greentext 
      greentitle ="Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us."
      greeningresse ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />
      
      <Accordion />

      </div>
  )
}

export default Services