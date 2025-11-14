import React, { useState } from 'react'
import Buttondark from './Buttondark'


const CustomerForm = () => {
                const [formData, setFormData] = useState({
                    name: '',
                    phoneNumber: '',
                    email: '',
                    subject: '',  
                    comment: '' 
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

            if (name === 'name' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
                error = "Your name can only contain letters."
            }

            else if (name === 'email' && !/^[^\s@]+@[^\s@,]+\.[^\s@,.]+$/.test(value)) {
                error = "Must be a valid email. (e.g. email@domain.com)"
            }

            else if (name === 'phoneNumber' && !/^\+?\d+$/.test(value)) {
                error = "Must be a valid phone number."
            }

            else if (name === 'subject' && !/^[A-Öa-ö0-9\,].+$/.test(value)) {
                error = "Can't be left empty."
            }

            else if (name === 'comment' && !/^[A-Öa-ö0-9\,].+$/.test(value)) {
                error = "Can't be left empty."
            }

            setErrors(prevErrors => ({...prevErrors, [name]: error}))
        }


        const validateForm = () => {
            const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Can't be left empty."
        } else if (!/^[A-Öa-ö\s\-]+$/.test(formData.name)) {
            newErrors.name = "Your name can only contain letters."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Can't be left empty."
        } else if (!/^[^\s@]+@[^\s@,]+\.[^\s@,.]+$/.test(formData.email)) {
            newErrors.email = "Must be a valid email. (e.g. email@domain.com)"
        }

       if (formData.phoneNumber.trim() && !/^\+?\d+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Must be a valid phone number."
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Can't be left empty."
        } else if (!/^[A-Öa-ö0-9\,].+$/.test(formData.subject)) {
            newErrors.subject = "Can't be left empty."
        }

        if (!formData.comment.trim()) {
            newErrors.comment = "Can't be left empty."
        } else if (!/^[A-Öa-ö0-9\,].+$/.test(formData.comment)) {    
            newErrors.comment = "Can't be left empty."    
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





        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })

            const data = await res.json()
            setMessage(data.message)
            console.log('Error message:', data)
            console.log('Status:', res.status) 
            console.log('Response OK:', res.ok)


       
        if (res.ok) {
            setSubmitted(true)
            setFormData({  
                    name: '',
                    phoneNumber: '',
                    email: '',
                    subject: '',
                    comment: '' })
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
    <div className="form-alignment"> 
        <div className="form-container">


<div className="form-name-container">
    <div className="red-dot-container">
                <div className="form-text-name">Your Name</div> <div className="red-dot">*</div></div>
                               <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`input ${errors.name && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Your name"/>
                                <span className="error-message">{errors.name && errors.name}</span>
                                </div>
                                        
                                        
                <div className="form-email-phone">
                            <div className="form-text-alignment">
                            <div className="red-dot-container">
                            <div className="form-text-email">Email</div> <div className="red-dot">*</div></div>
                                <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`input ${errors.email && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Email"/>
                                <span className="error-message">{errors.email && errors.email}</span>
                                        </div>

                        <div className="form-text-alignment">
                        <div className="form-text-telephone">Telephone</div>
                                <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Telephone"/>
                                <span className="error-message">{errors.phoneNumber && errors.phoneNumber}</span>
                                        </div>
                                        </div>

                        <div className="form-unit">
                            <div className="red-dot-container">
                            <div className="form-text-subject">Subject</div> <div className="red-dot">*</div></div>
                                <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`input ${errors.subject && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="How can we help you"/>
                                <span className="error-message">{errors.subject && errors.subject}</span>
                                        </div>
                        
                        <div className="form-storage">
                            <div className="red-dot-container">
                            <div className="form-text-comment">Comments / Questions</div> <div className="red-dot">*</div></div>
                                <textarea
                                type="text"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className={`input ${errors.comment && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Comments"></textarea>
                                        <span className="error-message">{errors.comment && errors.comment}</span>
                                        </div>


                            <div className="form-button"> 
                            <Buttondark
                            text="Submit"
                            />
                </div>
            </div>
        </div>
    </form>
  )
}
export default CustomerForm