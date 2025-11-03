
import React, {useState, useEffect} from 'react'

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
            <div key={item.id} className="column-wrapper">
    <div className="column-green-1">
    <div className="column-img">
        <img src={item.imageUrl} />
    </div>
  
    <div className="column-icon-datum"> 
    <i className="bi bi-calendar-range"></i>
                              <span className="kalender-text">{item.created}</span></div>
                            <h6 className="column-title">{item.title}</h6>
                      <div className="column-ingress">{item.description}</div>
                    <div className="column-yellow-ingress">Read more →</div>
                </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default Blogcolumn
