import React from 'react'
// import { Carousel } from 'react-carousel-minimal';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = () => {
  // const data = [
  //   {
  //     image: "https://www.neduet.edu.pk/sites/default/files/md-slider-image/slider_INTERACT.png"
  //   },
  //   {
  //     image: "https://www.neduet.edu.pk/sites/default/files/md-slider-image/Closing%20Ceremony%20of%20English%20Access%20Program%202021_1_0.png",
  //   },
  //   {
  //     image: "https://www.neduet.edu.pk/sites/default/files/banner_IICC.png",
  //   },


  // ];




  return (
    <div style={{height:"100vh"}}>
      {/* <Carousel
            data={data}
            time={3000}
            width="2000px"
            height="50vh"
            // captionStyle={captionStyle}
            // radius="10px"
            // captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "2000px",
              maxHeight: "500px",
              margin: "0px",
            }}
          /> */}





<Carousel fade indicators="false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.neduet.edu.pk/sites/default/files/md-slider-image/slider_INTERACT.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.neduet.edu.pk/sites/default/files/banner_IICC.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.neduet.edu.pk/sites/default/files/md-slider-image/Closing%20Ceremony%20of%20English%20Access%20Program%202021_1_0.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>





    </div>
  )
}

export default ImageCarousel