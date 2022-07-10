import React from 'react'
import Slider from "react-slick";

import './firstCarousel.scss'

export const FirstCarousel = ({ title, text }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className='first_carousel_wrapper'>
      <div className='container'>
        <div className='first_carousel_header'>
          <h3 className='carousel__title'>{title}</h3>
          <p>{text}</p>
        </div>
        <div className='first_carousel_block'>
          <Slider {...settings}>
            {
              [1, 2, 3, 4, 5, 6, 7].map((item, key) => {
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
      </div>
    </div>
  )
}
