import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'


function NewArticle() {

  const [formData, setFormData] = useState({
    title:'',
    description:''
  })

  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    e.preventDefault()
    
    fetch('/productions',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then(addProduction)
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

  return (
    <div className="article-form">
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label>Title</Form.Label> */}
        <Form.Control type="email" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Description</Form.Label> */}
        <Form.Control as="textarea" placeholder="Description" rows={3} />
      </Form.Group>
      <Button className="article-form-button" variant="secondary">Create</Button>
    </Form>
    </div>
  )
}

export default NewArticle;