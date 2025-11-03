import React, { useState } from 'react'
import Buttondark from './Buttondark'


const CustomerForm = () => {
                const [formData, setFormData] = useState({
                    name: '',
                    phoneNumber: '',      /*här skriver vi det som står i NAME under input*/ 
                    email: '',    /*här skriver vi det som står i NAME under input*/ 
                    subject: '',    /*här skriver vi det som står i NAME under input*/ 
                    comment: '' /*här skriver vi det som står i NAME under input*/ 
                    })
                const [errors, setErrors] = useState({})
                const [submitted, setSubmitted] = useState(false) /*OM formuläret är OK så kommer if (res.ok) { bli TRUE*/


        const handleChange = (e) => {    /*DENNA GÖR SÅ VI KAN SKRIVA PÅ HEMSIDNA*/
        const { name, value } = e.target
        setFormData({...formData, [name]: value})


        /*ERROR HANTERING*/
        if (value.trim() === '') { /*Om kund lämnar tomma fält*/
            setErrors(prevErrors =>  ({...prevErrors, [name]: `Please fill in ${name}`}))
        } 
        else {
             setErrors(prevErrors =>  ({...prevErrors, [name]: ''}))
        }

        /*HÄR SKA VI ANVÄNDA REGEX (regular expression)*/
        /*if (name === 'email') {

        if (!value.includes('@')) {
        setErrors(prev => ({ ...prev, email: 'Vänligen ange en giltig e-postadress.' }));
        } else {
        setErrors(prev => ({ ...prev, email: '' }));
        }
        }*/
        /*ERROR HANTERING FÖR TELEFONNUMMER*/
        /*if (name === 'phoneNumber') {
        
        if (!value.includes('@')) {
        setErrors(prev => ({ ...prev, phoneNumber: 'Vänligen ange ett giltigt telefonnummer.' }));
        } else {
        setErrors(prev => ({ ...prev, phoneNumber: '' }));
        }
        }
        
} ta bort denna sen       */

    }

    const handleOk = () => { /*NÄR KUNDEN TRYCKER PÅ OK-KNAPPEN SÅ FÖRSVINNER Kund-respons RUTAN*/
        setSubmitted(false)
    }


    const handleSubmit = async (e) => {  /*Så sidan inte laddar om*/
        e.preventDefault() 

        const newErrors = {}
        Object.keys(formData).forEach(field => {
                if (formData[field].trim() === '') {
                    newErrors[field] = `Please fill in ${field}`
                }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }


        /*alert('form submitted successfully')*/


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
                    phoneNumber: '',
                    email: '',
                    subject: '',
                    comment: '' })
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
    <div className="form-alignment"> 
        <div className="form-container">


<div className="form-name-container">
                <div className="form-name">Your Name</div>
                               <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input"
                                placeholder="name"/>
                                <span className="error-message">{errors.name && errors.name}</span>
                                </div>
                                        
                                        

                <div className="form-email-phone">
                            <div className="form-text-alignment">
                            <div className="form-text-email">Email</div>
                                <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input"
                                placeholder="Email"/>
                                <span className="error-message">{errors.email && errors.email}</span>
                                        </div>

                        <div className="form-text-alignment">
                        <div className="form-text-name">Telephone</div>
                                <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="input"
                                placeholder="phoneNumber"/>
                                <span className="error-message">{errors.phoneNumber && errors.phoneNumber}</span>
                                        </div>
                                        </div>

                        <div className="form-unit">
                            <div className="form-text-unit">Subject</div>
                                <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="input"
                                placeholder="Subject"/>
                                <span className="error-message">{errors.subject && errors.subject}</span>
                                        </div>
                        
                        <div className="form-storage">
                            <div className="form-text-storage">Comment</div>
                                <textarea
                                type="text"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="input"
                                placeholder="Describe your storage purpose so that we can match your request"></textarea>
                                        <span className="error-message">{errors.comment && errors.comment}</span>
                                        </div>


                    <div className="form-button"> 
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

