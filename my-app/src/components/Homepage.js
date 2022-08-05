import React, {useState} from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import Button from 'react-bootstrap/Button';


function Homepage({ setIsLoading, isLoading, handleDelete, userID, articleList, image, title, summary, id, fav, userId, articleComments}) {

  const [toggle, setToggle] = useState(false)
  const [favorite, setFavorite] = useState(fav)
  const [articles, setArticles] = useState([])
  const [change, setChange] = useState(false)
  const [comments, setComments] = useState("")
  
  function onHandleDelete(id){
    fetch(`/articles/${id}`, { 
      method: 'DELETE' 
    })
    .then(() => setArticles())
    window.location.reload(false)
  }

  function handleOnClick(id) {
    fetch(`/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ favorite: favorite })
    })
      .then(r => r.json())
      .then(() => setFavorite(!favorite))


  }

  var articleComment = []
  if( articleComments) {
  articleComment= articleComments.map((comment) => (
      <CommentCard
        id={comment.id}
        comment={comment.comment} />
  ))
  }

  return(
    <div>
    <main className="grid" >
      {articleList}
      <article id={id} >
        <img src={image} alt="Sample photo"/>
          <div className="text">
            <h3 className="title" >{title}</h3>
            <p></p>
            <Button variant="outline-warning" onClick={() => handleOnClick(id)}>{!favorite ? "Added!!" : "Add to Reading List"}</Button>

            <Button className="info" onClick={() => setToggle(!toggle)} variant="outline-info">Info</Button>

            <Button className="delete" onClick={() => onHandleDelete(id)} variant="outline-danger">Delete</Button>

          {toggle ? <article>
            <p>{summary}</p>

          </article> : ""}
          <CommentForm 
            comments= {comments}
            setComments={setComments}
            userID={userID} 
            id={id}
            articleId={id}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
            <CommentCard  
              id={id}
              articleComment={articleComment} 
              comments={comments}
              setComments={setComments}/>
        

          {/* <div>
            <ul>
             {articleComments.map((comment) => {
              return (
              <li>
                 id={comment.id}
                 comment={comment.comment}
              </li>
              
              )}
              )
              }
              </ul>
          </div> */}
            {/* <CommentForm articleComment={articleComment }/> */}
            {/* <CommentForm currentUser={currentUser} id={id} userId={userId} articleId={id} change={change} setChange={setChange}/> */}
           
          </div>
      </article>
    </main>
  </div>
  
  )
}

export default Homepage;