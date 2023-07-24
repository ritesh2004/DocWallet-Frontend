import React from 'react'
import Slider from 'react-slick'
import './Carousel.css';

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 7000,
        cssEase: "linear",
        pauseOnHover: true
      };
  return (
    <div className="carousel">
        <Slider {...settings}>
            <div>
                <img src="https://www.digilocker.gov.in/assets/img/web_2_en.jpg" alt="img" />
            </div>
        </Slider>
    </div>
  )
}

export default Carousel