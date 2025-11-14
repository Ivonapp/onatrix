import React, { useState } from 'react'
import Buttondark from './Buttondark'


const StorageForm = () => {
                const [formData, setFormData] = useState({
                    name: '',
                    email: '',
                    selectedUnit: '',
                    purpose: ''
                    })
                const [errors, setErrors] = useState({})
                const [submitted, setSubmitted] = useState(false)
                const [submitAttempted, setSubmitAttempted] = useState(false);
                const [message, setMessage] = useState('');


        const handleChange = (e) => { 
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        automaticValidation(name, value)
        }
    

        
        const automaticValidation = (name, value) => {
            let error = ''

            if (name === 'name' && !/^[A-Öa-ö\s\-]+$/.test(value)) {
                error = "Your name can only contain letters."
            }

            else if (name === 'email' && !/^[^\s@]+@[^\s@,]+\.[^\s@,.]+$/.test(value)) {
                error = "Email must contain '@' and a domain. (e.g. email@domain.com)"
            }

            else if (name === 'selectedUnit' && !/^[A-Z][0-9]+$/.test(value)) {
                error = "selectedUnit must start with a capital letter followed by numbers. (e.g. 'A12')"
            }

            else if (name === 'purpose' && !/^[A-Öa-ö0-9\s, ]+$/.test(value)) {
                error = "Please enter a valid storage description. Letters, numbers, and commas only."
            }

            setErrors(prevErrors => ({...prevErrors, [name]: error}))
        }


       
        const validateForm = () => {
            const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required."
        } else if (!/^[A-Öa-ö\s\-]+$/.test(formData.name)) {
            newErrors.name = "Your name can only contain letters."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required."
        } else if (!/^[^\s@]+@[^\s@,]+\.[^\s@,.]+$/.test(formData.email)) {
            newErrors.email = "Email must contain '@' and a domain. (e.g. email@domain.com)"
        }

        if (!formData.selectedUnit.trim()) {
            newErrors.selectedUnit = "Unit is required."
        } else if (!/^[A-Z][0-9]+$/.test(formData.selectedUnit)) {
            newErrors.selectedUnit = "Unit must start with a capital letter followed by numbers. (e.g. 'A12')"
        }

        if (!formData.purpose.trim()) {
            newErrors.purpose = "Storage description is required."
        } else if (!/^[A-Öa-ö0-9\s, .-]+$/.test(formData.purpose)) {    
            newErrors.purpose = "Please enter a valid storage description. Letters, numbers, and commas only."    
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




 
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })

            
            console.log('Status:', res.status) 
            console.log('Response OK:', res.ok)

            const data = await res.json();
            console.log('Current error:', data) 
            setMessage(data.message) 


  
        if (res.ok) {
            setSubmitted(true)
            setFormData({ 
                    name: '',
                    email: '',
                    selectedUnit: '',
                    purpose: '' })
            setSubmitAttempted(false);
        }
    }
    
    if (submitted) {
        return (
            <div className="successful-message">
                <i className="bi bi-envelope-check-fill"></i>
                <p>{message}</p>
                <Buttondark text="OK" onClick={handleOk} />
            </div>
        )
    }


  return (


<form onSubmit={handleSubmit} noValidate> 
    <div className="form-booking-alignment"> 
        <div className="form-booking-container">


                                        
                                        
                <div className="form-booking-email-phone">
                            <div className="form-booking-text-alignment">
                            <div className="red-dot-container">
                            <div className="form-booking-name">Your Name</div> <div className="red-dot">*</div></div>
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`input ${errors.name && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Your Name"/>
                                <span className="error-message">{errors.name && errors.name}</span>
                                        </div>

                        <div className="form-booking-text-alignment">
                        <div className="red-dot-container">
                        <div className="form-booking-email">Email</div> <div className="red-dot">*</div></div>
                                <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`input ${errors.email && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Email"/>
                                <span className="error-message">{errors.email && errors.email}</span>
                                        </div>
                                        </div>

                        <div className="formbooking-unit">
                            <div className="red-dot-container">
                            <div className="form-booking-unit">Choose Unit</div> <div className="red-dot">*</div></div>
                                <input
                                type="text"
                                name="selectedUnit"
                                value={formData.unit}
                                onChange={handleChange}
                                className={`input ${errors.selectedUnit && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Choose Unit"/>
                                <span className="error-message">{errors.selectedUnit && errors.selectedUnit}</span>
                                        </div>
                        
                        <div className="formbooking-storage">
                            <div className="red-dot-container">
                            <div className="form-booking-storage">Storage purpose</div> <div className="red-dot">*</div></div>
                                <textarea
                                type="text"
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                className={`input ${errors.purpose && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Describe your storage purpose so that we can match your request"></textarea>
                                        <span className="error-message">{errors.purpose && errors.purpose}</span>
                                        </div>


                            <div className="form-booking-button"> 
                            <Buttondark
                            text="Book Unit"
                            />
                </div>
            </div>
        </div>
    </form>
  )
}
export default StorageForm