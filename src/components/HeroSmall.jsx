      import React from 'react';
      import "./Adesign.css";



    export default function HeroSmall({ headline, ingress }) {
        return (
        
        <div>
          
        <div className="hero-background">
        <div className="container">
        <div className="text-container">
        <div className ="hero-small"> 
        <h1 className="h1-headline">{headline}</h1>
        <div className="hero-ingress">{ingress}</div>
        </div>
        </div>
        </div>
        </div>
        </div>
      )
      }