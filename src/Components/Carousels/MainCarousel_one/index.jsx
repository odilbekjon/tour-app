import React from 'react'
import Slider from "react-slick";

import './mainCarouselOne.scss'

export const MainCarousel_one = ({ title = '', text = '' }) => {
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
    <div className='main_carousel_one_wrapper'>
      <div className='container'>
        <div className='main_carousel_one_header'>
          <h3 className='carousel__title'>{title}</h3>
          <p>{text}</p>
        </div>
        <div className='main_carousel_one_block'>
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
