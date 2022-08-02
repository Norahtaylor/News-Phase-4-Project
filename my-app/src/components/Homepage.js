import React from 'react'

function Homepage({ image, title, description, author }) {
  return (
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src={image} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Homepage