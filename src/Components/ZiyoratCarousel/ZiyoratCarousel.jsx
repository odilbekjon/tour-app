import "./ZiyoratCarousel.scss";


// component
import { FirstCarousel } from "../Carousels/FirstCarousel/FirstCarousel";

export default function ZiyoratCarousel() {
    return(
        <section>
            <div className="container">
                <div className="carousel__content">
                    <h1 className="slider__header-head">O’xshash ziyoratgohlar</h1>
                    <FirstCarousel className="carousel__slider" />
                </div>
            </div>
        </section>
    )
}