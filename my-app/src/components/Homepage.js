import React, {useState} from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import Button from 'react-bootstrap/Button';


function Homepage({ handleDelete, currentUser, articleList, image, title, summary, id, fav, userId, articleComments}) {

  const [toggle, setToggle] = useState(false)
  const [favorite, setFavorite] = useState(fav)
  const [articles, setArticles] = useState([])
  const [change, setChange] = useState(false)

  console.log(currentUser)
  console.log(articleComments)
  
  function onHandleDelete(id){
    fetch(`/articles/${id}`, { 
      method: 'DELETE' 
    })
    .then(() => setArticles())
    window.location.reload(false)
  }


    function handleOnClick(id) {
    setFavorite(!favorite)

      fetch(`/articles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({favorite: favorite})
      })
        .then(r => r.json())
        .then(() => setFavorite(!favorite))
      console.log({ id })
      console.log("inside fetch", favorite)

    }



  // const articleComment = articleComments.map((comment) => (
  //   <CommentForm 
  //   id ={comment.id}
  //   comment = {comment.comment}/>
  // ))


  return(
    <div>
    <main className="grid" >
      {articleList}
      <article id={id} >
        <img src={image} alt="Sample photo"/>
          <div className="text">
            <h3 className="title" >{title}</h3>
            <p></p>
            <Button variant="outline-warning" onClick={() => handleOnClick(id)}>{!favorite ? "Add to Reading List" : "Added!!"}</Button>
            <Button className="info" onClick={() => setToggle(!toggle)} variant="outline-info">Info</Button>
            <Button className="delete" onClick={() => onHandleDelete(id)} variant="outline-danger">Delete</Button>

          {toggle ? <article>
            <p>{summary}</p>

          </article> : ""}
            {/* <CommentForm articleComment={articleComment }/> */}
            {/* <CommentForm currentUser={currentUser} id={id} userId={userId} articleId={id} change={change} setChange={setChange}/> */}
           
          </div>
      </article>
    </main>
  </div>
  
  )
}

export default Homepage;