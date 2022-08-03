import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Homepage({ articleList, image, title, description, date }) {
  return(
    <div className='homePageCard'>
    <Card className="card" style={{ width: '15rem' }}>
      {articleList}
    <Card className="news-img">
      <Card.Img variant="top" src={image} />
    </Card>
    <Card.Body className="container">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary">Add To Reading List</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Homepage