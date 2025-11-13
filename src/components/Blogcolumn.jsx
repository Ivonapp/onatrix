
import React, {useState, useEffect} from 'react'
import Blogaccordion from './Blogaccordion'

const Blogcolumn = () => {
    const [serviceItems, setServiceItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
        const data = await res.json()
        setServiceItems(data)
    }
    useEffect(() => {
    fetchData()
    }, [])
  return (
    
        <div className="container">  
<div className="column-blog-container">

    {serviceItems.map(item => (
    <article key={item.id} className="column-wrapper">
    <div className="column-green-1">
<div className="blog-accordion-wrapper-closed">
<div className="column-img">
        <img src={item.imageUrl} alt="Image related to the blog post" />
    </div>

      <div className="column-icon-datum"> 
        <i className="bi bi-calendar-range" aria-hidden="true"></i>
          <span className="kalender-text">{item.created}</span></div>
              <h6 className="column-title">{item.title}</h6>
            </div>

<div className="blog-accordion-wrapper-open">
              <Blogaccordion item={item} />
                  </div>
                </div>
            </article>
          ))}
      </div>
    </div>
  )
}
export default Blogcolumn
