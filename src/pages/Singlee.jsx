import Single1 from "../Components/Single1/Single";
import SingleCarousel from "../Components/SingleCarousel/SingleCarousel";
import { FirstCarousel } from "../Components/Carousels/FirstCarousel/FirstCarousel";

export default function Single() {
    return (
        <>
            <Single1 />
            <SingleCarousel />
            <FirstCarousel title={'O’xshash ziyoratgohlar'} />
        </>
    )
}