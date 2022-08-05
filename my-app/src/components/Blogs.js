import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Blogs({ blogList }) {
    const [spaceImages, setSpaceImages] = useState([])
    const [errors, setErrors] = useState()


    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.pixelstalk.net/wp-content/uploads/images4/4K-Space-Wallpaper-1-scaled.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p2016a-m-2000x1374.png"
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











