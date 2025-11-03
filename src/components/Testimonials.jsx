
import React, {useState, useEffect} from 'react'
import Testimonialstitle from './Testimonialstitle'


const Testimonials = () => {
    const [serviceItems, setServiceItems] = useState([])


    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setServiceItems(data)
    }
    useEffect(() => {
    fetchData()
    }, [])

  return (

<div className="testimonials-color">
          <div className="container">
            < Testimonialstitle
            title="Testimonials"
            middletitle="See What Our Client Have to Say"
            ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
            />
            
              <div className="testimonials">

        <div className="testimonials-wrapper">
                       {serviceItems.map(item => (
                       <div key={item.id} className="box-wrapper">
            


            <div className="testimonial-box">
              <div className="testimonials-wrap">
               
                <div className="testimonials-stars">{item.rating}</div>
              </div>

              <div className="testimonials-comment">{item.comment}</div>

              <div className="testimonials-customer">
                <img
                  className="testimonials-icon"
                  src={item.avatarUrl}
                />
                <div className="text-sections">
                  <h5 className="testimonials-title">{item.name}</h5>
                  <p className="customeringress">{item.companyName}</p>
                </div>
              </div>
            </div>
          </div>
           ))}
        </div>
      </div>
  </div>
</div>

  )
}

export default Testimonials