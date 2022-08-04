import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import { useNavigate } from 'react-router'
// import { useHistory } from "react-router-dom";


function NewArticle() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()
//   const history = useHistory()

  function onSubmit(e) {
    e.preventDefault()
    
    fetch('/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            author: author,
            description: description,
            image: image
        })
    })
    .then((response) => response.json())
    // history.push('/articles')
    // navigate("/articles")
    // window.location.reload(false)
    .then((data) => {
       console.log(data);          
            //  else {
            //     res.json().then(json => setErrors(Object.entries(json.errors)))
            //     console.log(errors)
            // }
        })
        setTitle('')
        setAuthor('')
        setDescription('')
        setImage('')
}

  return (
    <div className="article-form">
        <form onSubmit={onSubmit}>
            <div className="article-title">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e => setTitle(e.target.value))}
                />
            </div>
            <div className="article-title">
                <label>Author</label>
                <input type="text" className="form-control" placeholder="Author" 
                onChange={(e => setAuthor(e.target.value))}
                value={author}/>
            </div>
            {/* <div className="article-description">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Description" 
                onChange={(e => setDescription(e.target.value))}
                value={description}/>
            </div> */}
            <div className="article-description">
                <label>Image Url</label>
                <input type="text" className="form-control" placeholder="Image " 
                onChange={(e => setImage(e.target.value))}
                value={image}/>
            </div>
            <Form.Group className="article-description" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description" 
                onChange={(e => setDescription(e.target.value))} />
            </Form.Group>
            <div className="article-form-button">
            <Button type="submit" variant="secondary">Create</Button>
            </div>      
        </form>
    </div>
  )
}

export default NewArticle;