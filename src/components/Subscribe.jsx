import React, {useState, useEffect} from 'react'
import Buttondark from './Buttondark'


const Subscribe = () => {
const [formData, setFormData] = useState ({ email: '', })


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value })
}
const handleSubmit = async (e) => {
  e.preventDefault()

if (!formData.email.includes('@') || formData.email.trim() === '') {
    alert('Vänligen ange en giltig e-postadress.');
    setEmailError(true);
    return;
  }


const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)

})
      if (res.ok) {
        console.log('allt lyckades')
        alert('allt lyckades')
        setFormData({ email: '' });
        
      }
      else {
      console.log('Något gick fel')
      alert('Vänligen kontrollera att du fyllt i din email korrekt')
      }


}
  return (

<div className="subscribe-color">
<div className="container">         
<div className="subscribe-container">
<div className ="icon-row">
    
    <div className ="subscribe-text-wrapper"> 
                <div className="subscribe-title">
                 Subscribe Our Newsletter
                </div>
                <div className="subscribe-ingress">
                 Subscribe to our newsletter to receive early discount offers, updates and info
                </div>
                </div>


                <form className="search-row" onSubmit={handleSubmit} noValidate>

                <div className="input-wrapper">
                <input
                type="text"
                name="email"
                className="input"
                placeholder="Enter your email"
                value={formData.email} onChange={handleInputChange} required
                />
                
                </div>
                        <Buttondark
                        text="submit"
                        />
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Subscribe