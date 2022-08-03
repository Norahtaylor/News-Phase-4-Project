import React, {useState} from 'react';
import ReadingList from './ReadingList';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Homepage({ articleList, image, title, summary, id, fav }) {
  const [toggle, setToggle] = useState(false)
  const [favorite, setFavorite] = useState(fav)
  // const [favoriteToggle, setFavoriteToggle] = useState("Add to Reading List")



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

    // make a displayed filter list from the items that were ClickHandler, to only display them


  return(
    <div>
    <main className="grid" >
      {articleList}
      <article id= {id} >
        <img src={image} alt="Sample photo"/>
          <div className="text">
            <h3 className="title" >{title}</h3>

            <button onClick={() => handleOnClick(id)}>{!favorite ? "Added!!": "Add to Reading List" }</button>
          <button onClick={() => setToggle(!toggle)}>Description</button>
          {toggle ? <article>
            <p>{summary}</p>
          </article> : ""}

          </div>
      </article>
    </main>
  </div>
  
  )
}

export default Homepage