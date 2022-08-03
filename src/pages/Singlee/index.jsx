import Single1 from "../../Components/SinglePage/Single1/Single";
import { GaleryCarousel } from "../../Components/Carousels/GaleryCarousel";
import { MainCarousel_one } from "../../Components/Carousels/MainCarousel_one";
import "./single.scss";

// images
import Map from "../../Assets/images/map.png";

export const Single = () => {
    return (
        <>
            <Single1 />
            <GaleryCarousel title={'Fotogaleriya'} />
            <div className="container">
                <img className="map__images" src={Map} alt="image" />
            </div>
            <MainCarousel_one title={'O’xshash ziyoratgohlar'} />
        </>
    )
}