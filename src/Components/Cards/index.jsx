import { Link } from "react-router-dom";

// images
import city from "../../Assets/cities/tashkent.png";

import "./сards.scss";


export default function Cards() {
    return (
        <>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, key) => {
                    return (
                        <li className="card__item">
                            <div className="card__item--content">
                                <img className="card__item--image" src={city} alt="" />
                                <h2 className="card__item--head">Toshkent viloyati</h2>
                                <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                                <div className="item__box--wrapper">
                                    <div className="card__item--location">Shimoliy-sharqiy</div>
                                    <div className="card__item--num">231</div>
                                </div>
                            </div>
                            <Link to={'/city-page'} className="card__item--link">Batafsil</Link>
                        </li>
                    )
                })
            }
        </>
    )
}