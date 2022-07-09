import React from 'react'
import Slider from "react-slick";

import './firstCarousel.scss'

export const FirstCarousel = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='first_carousel_block'>
      <Slider {...settings}>
        {
          [1, 2, 3, 4, 5].map((item, key) => {
            return (
              <div className='carousel-item' key={key}>
                <div></div>
                <h4>Lorem ipsum</h4>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
