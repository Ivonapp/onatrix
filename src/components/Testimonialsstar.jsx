import React from 'react'

const Testimonialsstar = ({starRating}) => {
  const maxStars = 5
  const filledStars = Math.min(starRating, maxStars)
  const emptyStars = maxStars - filledStars

  return (
    <div className="Testimonialsstars-container">
      
      {
        [...Array(filledStars)].map((_, index) => (
        <i key={index} className="bi bi-star-fill"></i>

        ))
      }

            {
        [...Array(emptyStars)].map((_, index) => (
        <i key={index} className="bi bi-star"></i>

        ))
      }


    </div>
  )
}

export default Testimonialsstar