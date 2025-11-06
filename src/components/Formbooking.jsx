import React, { useState } from 'react'
import Buttondark from './Buttondark'


const CustomerForm = () => {
                const [formData, setFormData] = useState({
                    name: '',
                    email: '',    /*här skriver vi det som står i NAME under input*/ 
                    unit: '',    /*här skriver vi det som står i NAME under input*/ 
                    storage: '' /*här skriver vi det som står i NAME under input*/ 
                    })
                const [errors, setErrors] = useState({})
                const [submitted, setSubmitted] = useState(false) /*OM formuläret är OK så kommer if (res.ok) { bli TRUE*/
                const [submitAttempted, setSubmitAttempted] = useState(false);



        const handleChange = (e) => {    /*DENNA GÖR SÅ VI KAN SKRIVA PÅ HEMSIDNA*/
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        automaticValidation(name, value)
        }
    

        /*(regular expression) HANTERAR DET KUNDEN SKRIVER I REALTID*/
        const automaticValidation = (name, value) => {
            let error = ''

            if (name === 'name' && !/^[A-Öa-ö\s\-]+$/.test(value)) {
                error = "Your name can only contain letters."
            }

            else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Email must contain '@' and a domain. (e.g. email@domain.com)"
            }

            else if (name === 'unit' && !/^[A-Z][0-9]+$/.test(value)) {
                error = "Unit must start with a capital letter followed by numbers. (e.g. 'A12')"
            }

            else if (name === 'storage' && !/^[A-Öa-ö0-9/s, ]+$/.test(value)) {
                error = "Please enter a valid storage description. Letters, numbers, and commas only."
            }

            setErrors(prevErrors => ({...prevErrors, [name]: error}))
        }


        /*(regular expression) HANTERAR DET KUNDEN SKRIVER*/
        const validateForm = () => {
            const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required."
        } else if (!/^[A-Öa-ö\s\-]+$/.test(formData.name)) {
            newErrors.name = "Your name can only contain letters."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email must contain '@' and a domain. (e.g. email@domain.com)"
        }

        if (!formData.unit.trim()) {
            newErrors.unit = "Unit is required."
        } else if (!/^[A-Z][0-9]+$/.test(formData.unit)) {
            newErrors.unit = "Unit must start with a capital letter followed by numbers. (e.g. 'A12')"
        }

        if (!formData.storage.trim()) {
            newErrors.storage = "Storage description is required."
        } else if (!/^[A-Öa-ö0-9/s, .-]+$/.test(formData.storage)) {    
            newErrors.storage = "Please enter a valid storage description. Letters, numbers, and commas only."    
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
        }


    const handleOk = () => { /*NÄR KUNDEN TRYCKER PÅ OK-KNAPPEN SÅ FÖRSVINNER Kund-respons RUTAN*/
        setSubmitted(false)
    }


    const handleSubmit = async (e) => {  /*Så sidan inte laddar om*/
        e.preventDefault() 
        setSubmitAttempted(true);

        if (!validateForm()) {              /*<OM formuläret är ogiltigt så stoppas det här*/
            console.log('form invalid')
            return                          /*Returnar om formuläret är ogiltift*/
        }




        /*FETCH HÄR*/
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })


            console.log('Status:', res.status) 
            console.log('Response OK:', res.ok)


        /*OM ALLT KUND SKICKAR IN OVAN ÄR KORREKT KOMMER NEDAN:*/
        if (res.ok) {
            setSubmitted(true)
            setFormData({  /*NOLLSTÄLLER FORMULÄRET*/
                    name: '',
                    email: '',
                    unit: '',
                    storage: '' })
            setSubmitAttempted(false);
        }
    }
    
    if (submitted) {
        return (
            <div className="Kund-respons">
                <h2>Tack för ditt meddelande!</h2>
                <p>Vi kontaktar dig inom 72 timmar.</p>
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

                        <div className="form-booking-unit">
                            <div className="red-dot-container">
                            <div className="form-booking-unit">Choose Unit</div> <div className="red-dot">*</div></div>
                                <input
                                type="text"
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                className={`input ${errors.unit && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Choose Unit"/>
                                <span className="error-message">{errors.unit && errors.unit}</span>
                                        </div>
                        
                        <div className="form-booking-storage">
                            <div className="red-dot-container">
                            <div className="form-booking-storage">Storage purpose</div> <div className="red-dot">*</div></div>
                                <textarea
                                type="text"
                                name="storage"
                                value={formData.storage}
                                onChange={handleChange}
                                className={`input ${errors.storage && submitAttempted ? 'error' : ''}`} /*CHATGPT hjälpte mig med denna raden: {`input ${errors.phoneNumber && submitAttempted ? 'error' : ''}`}*/
                                placeholder="Describe your storage purpose so that we can match your request"></textarea>
                                        <span className="error-message">{errors.storage && errors.storage}</span>
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
export default CustomerForm