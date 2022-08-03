import React, {useState, useEffect} from 'react'

function Blogs({blogList}) {
    const [spaceImages, setSpaceImages] = useState([])
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
            .then(res => {
                if (res.ok) {
                    res.json().then(spaceImages => console.log(spaceImages.photos))
                    setSpaceImages(spaceImages)
                } else {
                    res.json().then(data => setErrors(data.errors))
                }
            })
    }, []) 
  return (
    <div>
        {/* {spaceImages.map(image => {
        return image={image}})
         console.log(image)}
        */}
      <div class="scene">
          <div class="blogcard">
              <div class="card__face card__face--front">
                  <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" />
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