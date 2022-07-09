import React from 'react'
import Slider from "react-slick";
import './homeCarousel.scss'
import img from '../../../Assets/images/carouselImg.png'
import { HomeBanner } from '../../HomeBanner/HomeBanner'

export const HomeCarousel = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

  };
  return (
    <div className='container'>
      <div className='home-carousel'>
        <div className='carousel-block'>
          <Slider {...settings}>
            {
              [1, 2, 3, 4, 5].map((item, key) => {
                return (
                  <div className='carousel-item' key={key}>
                    <img className='carousel-item-img' src={img} alt="" />
                    <div className='carousel-item-content'>
                      <h4>Enjoy the nature</h4>
                      <h2>Welcome to Uzbekistan!</h2>
                      <h3>Lorem Ipsum</h3>
                    </div>
                  </div>
                )
              })
            }

          </Slider>
        </div>
        <HomeBanner />
      </div>
    </div>
  )
}
