import React, { useState } from 'react'
import Buttondark from './Buttondark'


const Subscribe = () => {
      const [formData, setFormData] = useState({
      email: ''
      })
      const [errors, setErrors] = useState({})
      const [submitted, setSubmitted] = useState(false) 
      const [submitAttempted, setSubmitAttempted] = useState(false)
      const [message, setMessage] = useState('')


        const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        automaticValidation(name, value)
        }

      
        const automaticValidation = (name, value) => {
            let error = ''

            if (name === 'email' && !/^[^\s@]+@[^\s@,]+\.[^\s@,.]+$/.test(value)) {
                error = "Must be a valid email. (e.g. email@domain.com)"
            }

            setErrors(prevErrors => ({...prevErrors, [name]: error}))
        }

    
        const validateForm = () => {
            const newErrors = {}

        if (!formData.email.trim()) {
            newErrors.email = "Can't be left empty."
        } else if (!/^[^\s@]+@[^\s@,]+\.[^\s@,.]+$/.test(formData.email)) {
            newErrors.email = "Must be a valid email. (e.g. email@domain.com)"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
        }

        const handleOk = () => { 
        setSubmitted(false)
        }

        const handleSubmit = async (e) => { 
        e.preventDefault() 
        setSubmitAttempted(true);


        if (!validateForm()) { 
            console.log('form invalid')
            return                        
        }


          const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

          })

            const data = await res.json()
            setMessage(data.message)
            console.log('Status:', res.status) 
            console.log('Response OK:', res.ok)
            console.log('Error message', data)
            

      
        if (res.ok) {
            setSubmitted(true)
            setFormData({ 
                    email: ''})
            setSubmitAttempted(false);
                  }
              }
    
    if (submitted) {
        return (
            <div className="successful-message-container">
            <div className="successful-message">
                <i className="bi bi-envelope-check-fill"></i>
                <p>{message}</p>
                <Buttondark text="OK" onClick={handleOk} />
            </div>
        </div>
        )
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
      <div className="subscribe-btn-placeholder-container">
      <form className="search-row" onSubmit={handleSubmit} noValidate>
           
                <div className="input-wrapper">
                <input
                type="text"
                name="email"
                className={`input ${errors.email && submitAttempted ? 'error' : ''}`} /*Denna raden är med chatgpt - {`input ${errors.email && submitAttempted ? 'error' : ''}`}*/
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"/>
                </div>
                        <Buttondark
                        text="submit"
                        />
                        
                            </form>
                  <span className="error-message">{errors.email && errors.email}</span>
                </div></div>
          </div>
      </div>
  </div>
  )
}
export default Subscribe