import React, {useState} from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function Homepage({ articleList, image, title ="Blue Origin launches sixth New Shepard crewed suborbital flight", summary, id, fav, userId }) {
  const [toggle, setToggle] = useState(false)
  const [favorite, setFavorite] = useState(fav)
  const [change, setChange] = useState(false)
  // const [favoriteToggle, setFavoriteToggle] = useState("Add to Reading List")

  function handleDelete(){
    fetch(`/articles/${id}`, { method: 'DELETE' })
    // .then(() => console.log('Delete successful'));
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




  return(
    <div>
      {/* <div class="scene">
        <div class="blogcard">
          <div class="card__face card__face--front">
            <img src={image} />
          </div>
             <div class="card__face card__face--back">
                  <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" />
            <button onClick={() => setToggle(!toggle)}>Description</button>
            {toggle ? <article>
              <p>{summary}</p>
            </article> : ""}
        
              </div>
          </div>
          </div> */}
    <main className="grid" >
      {articleList}
      <article id= {id} >
        <img src={image} alt="Sample photo"/>
          <div className="text">
            <h3 className="title" >{title}</h3>
<<<<<<< HEAD
            {/* <button onClick={() => handleOnClick(id)}>{!favorite ? "Add to Reading List" : "Added!!" }</button> */}
=======
            <button onClick={() => handleOnClick(id)}>{!favorite ? "Added!!": "Add to Reading List" }</button>
>>>>>>> c3f859a6d1d9aebbe3687976b3e05257f8ec2975
          <button onClick={() => setToggle(!toggle)}>Description</button>
          <button onClick={handleDelete}>Delete</button>
          {toggle ? <article>
            <p>{summary}</p>
          </article> : ""}
          <CommentForm userId={userId} articleId ={id} change={change} setChange={setChange}/>
 

          </div>
      </article>
    </main>
  </div>
  
  )
}

export default Homepage