import React, {useState} from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import Button from 'react-bootstrap/Button';


function Homepage({ handleDelete, currentUser, articleList, image, title, summary, id, fav, userId, articleComments }) {

  const [toggle, setToggle] = useState(false)
  const [favorite, setFavorite] = useState(fav)
  const [articles, setArticles] = useState([])
  const [change, setChange] = useState(false)

  console.log(currentUser)
  
  function onHandleDelete(id){
    fetch(`/articles/${id}`, { 
      method: 'DELETE' 
    })
    .then(() => setArticles())

//  function handleDelete(){
  //  fetch(`/articles/${id}`, 
    //{ method: 'DELETE' })
    //.then(() => console.log(articles));
    // window.location.reload(false)

 // }

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


  return(
    <div>
    <main className="grid" >
      {articleList}
      <article id={id} >
        <img src={image} alt="Sample photo"/>
          <div className="text">
            <h3 className="title" >{title}</h3>
            <button onClick={() => handleOnClick(id)}>{!favorite ? "Added!!": "Add to Reading List" }</button>
          <button onClick={() => setToggle(!toggle)}>Description</button>
          <button onClick={() => onHandleDelete(id)}>Delete</button>
          {toggle ? <article>
            <p>{summary}</p>
          </article> : ""}
            <CommentForm currentUser={currentUser} userId={userId} articleId={id} change={change} setChange={setChange}/>
           
          </div>
      </article>
    </main>
  </div>
  
  )
}

export default Homepage