import Single1 from "../../Components/SinglePage/Single1/Single";
import { GaleryCarousel } from "../../Components/Carousels/GaleryCarousel/GaleryCarousel";
import { FirstCarousel } from "../../Components/Carousels/FirstCarousel/FirstCarousel";

export const Single = () => {
    return (
        <>
            <Single1 />
            <GaleryCarousel title={'Fotogaleriya'} />
            <FirstCarousel title={'O’xshash ziyoratgohlar'} />
        </>
    )
}