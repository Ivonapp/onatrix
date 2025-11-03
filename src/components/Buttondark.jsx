      import React from 'react';
      import "./Adesign.css";

    export default function Buttondark({ text, onClick, type }) {
        return (
        
          
      <button
      className="buttondark"
      onClick={onClick}
      type={type} /*antingen type = "button" som gör att inget formulär skickas, eller */ 
      >{text}
      </button>


      )
      }
