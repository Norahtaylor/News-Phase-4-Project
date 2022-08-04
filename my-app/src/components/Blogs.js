import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Blogs({blogList}) {
    const [spaceImages, setSpaceImages] = useState([])
    const [errors, setErrors] = useState()

    // useEffect(() => {
    //     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    //         .then(res => {
    //             if (res.ok) {
    //                 res.json().then(spaceImages =>
    //                 setSpaceImages(spaceImages.photos))
    //             } else {
    //                 res.json().then(data => setErrors(data.errors))
    //             }
    //         })
    // }, []) 

    
    //     console.log(spaceImages)
    
  return (
    <div className="carousel">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Blogs