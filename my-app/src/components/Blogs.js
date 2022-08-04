import React, {useState, useEffect} from 'react'

function Blogs({blogList, key, title, link, summary, image, newSite, date}) {
    const [spaceImages, setSpaceImages] = useState([])
    const [errors, setErrors] = useState()
    
    console.log(blogList)
    console.log(image)
  return (
    <div>
      
       {blogList}
      <div class="scene">
          <div class="blogcard">
              <div class="card__face card__face--front">
                  <img src={image} />
              </div>
              <div class="card__face card__face--back">
                  <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" />
              </div>
          </div>
          <div class="blogcard">
              <div class="card__face card__face--front">
                  <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" />
              </div>
              <div class="card__face card__face--back">
                  <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" />
              </div>
          </div>
          <div class="blogcard">
              <div class="card__face card__face--front">
                  <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" />
              </div>
              <div class="card__face card__face--back">
                  <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" />
              </div>
          </div>
      </div>
      </div>
  )
}

export default Blogs