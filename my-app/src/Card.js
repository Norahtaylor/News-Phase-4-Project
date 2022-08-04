import { useEffect, useState } from "react"


function Card({ articleList, imageRead, titleRead, summaryRead, idRead, favRead, id }) {
  const [favorite, setFavorite] = useState(favRead)


 
    function handleOnClick() {
    
    setFavorite(!favorite)

    // fetch(`/articles/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ favorite: favorite })
    // })
    //   .then(r => r.json())
    //   .then(() => setFavorite(!favorite))

    console.log("inside fetch", favorite)

  } 
  

  return (
   
      <div className="content-wrapper">

        <div class="news-card">
          <a href="#" class="news-card__card-link"></a>
          <img src={imageRead} alt="" class="news-card__image"/>
            <div class="news-card__text-wrapper">
              <h2 class="news-card__title">{titleRead}</h2>
              <div class="news-card__post-date">
            {/* <button onClick={handleOnClick}> Remove from Reading List
                </button> */}
                </div>
              <div class="news-card__details-wrapper">
                <p class="news-card__excerpt">{summaryRead}</p>
                <a href="#" class="news-card__read-more">Read more <i class="i"></i></a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Card;