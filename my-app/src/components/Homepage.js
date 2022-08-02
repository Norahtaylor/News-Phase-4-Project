import React from 'react'

function Homepage({ image, title, description, author }) {
  return(
    <div className="card">
    <img className="card-img" src={image} alt="articles-pic"/>
    <h2>{title}</h2>
    <p>{description}</p>
    <h4>{author}</h4>
    </div>
  )
}

export default Homepage