import React, { Component } from "react";
import Slider from "react-slick";
import "./SingleCarousel.scss";

// images
import Carousel1 from "../../Assets/images/carousel-img1.jpg";
import Carousel2 from "../../Assets/images/carousel-img2.jpg";
import Carousel3 from "../../Assets/images/carousel-img3.png";
import Left from "../../Assets/images/left-carousel.png";
import Right from "../../Assets/images/right-carousel.png";

export default class SingleCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="carousel__section">
          <div className="container">
          <h2 className="carousel__head"> Single Item</h2>
          <Slider {...settings}>
            <div className="carousel__wrapper">
              <img className="carousel__images" src={Carousel1} width={900} height={227} alt=""/>
            </div>
            <div className="carousel__wrapper">
              <img className="carousel__images" src={Carousel2} width={900} height={227} alt=""/>
            </div>
            <div className="carousel__wrapper">
              <img className="carousel__images" src={Carousel3} width={900} height={227} alt=""/> 
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}