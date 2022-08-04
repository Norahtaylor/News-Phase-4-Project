import React from 'react'

function FirstScreen() {
  return (
    <div>FirstScreen
      {/* Container for the image gallery */}
      <div class="container">

       {/* Full-width images with number text  */}
        <div class="mySlides">
          <div class="numbertext">1 / 6</div>
          <img src="img_woods_wide.jpg" style="width:100%"/>
        </div>
    </div>
  )
}

export default FirstScreen