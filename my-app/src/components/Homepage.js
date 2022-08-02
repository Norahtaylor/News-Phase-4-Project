import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Homepage({ articleList, image, title, description, author, date }) {
  return(
    <Card className="card" style={{ width: '18rem' }}>
      {articleList}
    <Card className="news-img">
      <Card.Img variant="top" src={image} />
    </Card>
    <Card.Body className="container">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary">Add to Favorites</Button>
    </Card.Body>
  </Card>
  )
}

export default Homepage