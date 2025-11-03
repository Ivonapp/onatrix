      import React from 'react';
      import { Link } from 'react-router-dom';
      import "./Adesign.css";
      import Buttonlight from './Buttonlight';
      import Gubbe from '../assets/images/Gubbe.svg';



    export default function HeroLarge() {
        return (
        
        <div>

        <div className="hero-background">
        <div className="container">
        <div className="hero-wrapper">
        <div className="text-container">
        <h1 className="h1-headline">Space Simplified,</h1>
        <h1 className="h1-headline">Storage Perfected</h1>
        <div className="hero-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</div>
        

        <Link to="/Errorpage">
        <Buttonlight
        text ="Discover More"
        />
        </Link>
        </div>
      
        <div className="hero-icon">
        <img src={Gubbe} alt="Logotyp" className="logo" /> 
        </div>
        </div>
        </div>
      </div>
      </div>

      )
      }