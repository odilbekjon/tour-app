import Slider from "react-slick";
import "./galeryCarousel.scss";

// images
import Carousel1 from "../../../Assets/carousel-img/carousel-img1.jpg";

export const GaleryCarousel = ({ title = '' }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
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
    ]
  }

  return (
    <div className='galery_carousel_wrapper'>
      <div className='container'>
        <div style={title == '' ? { display: 'none' } : {}} className='galery_carousel_header'>
          <h3 className='carousel__title'>{title}</h3>
        </div>
        <div className='galery_carousel_block'>
          <Slider {...settings}>
            {
              [1, 2, 3].map((item, key) => {
                return (
                  <div className="carousel-item-box" key={key}>
                    <div className="carousel-item">
                      <img className="carousel-item-img" src={Carousel1} alt="carousel" />
                    </div>
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