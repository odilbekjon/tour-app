import "./Cards.scss";

// images
import Images1 from "../../Assets/imagess/tashkent.png";
import Images2 from "../../Assets/imagess/samarqand.png";
import Images3 from "../../Assets/imagess/fargona.png";
import Images4 from "../../Assets/imagess/andijon.png";
import Images5 from "../../Assets/imagess/jizzah.png";
import Images6 from "../../Assets/imagess/navoiy.png";
import Images7 from "../../Assets/imagess/qarshi.png";
import Images8 from "../../Assets/imagess/surxon.png";
import Images9 from "../../Assets/imagess/buxoro.png";
import Images10 from "../../Assets/imagess/sirdaryo.png";
import Images11 from "../../Assets/imagess/namangan.png";
import Images12 from "../../Assets/imagess/xorazim.png";

export default function Cards() {
    return(
        <section>
            <div className="container">
                <div className="card__box">
                    <h1 className="car__head">O’zbekiston viloyatlari</h1>
                    <p className="card__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <ul className="card__list">
                        <li className="card__item">
                            <img className="card__item--image" src={Images1} alt="" />
                            <h2 className="card__item--head">Toshkent viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images2} alt="" />
                            <h2 className="card__item--head">Samarqand viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images3} alt="" />
                            <h2 className="card__item--head">Farg'ona viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images4} alt="" />
                            <h2 className="card__item--head">Andijon viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images5} alt="" />
                            <h2 className="card__item--head">Jizzah viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images6} alt="" />
                            <h2 className="card__item--head">Navoiy viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images7} alt="" />
                            <h2 className="card__item--head">Qashqadaryo viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images8} alt="" />
                            <h2 className="card__item--head">Surxondaryo viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images9} alt="" />
                            <h2 className="card__item--head">Buxoro viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images10} alt="" />
                            <h2 className="card__item--head">Sirdaryo viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images11} alt="" />
                            <h2 className="card__item--head">Namangan viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        <li className="card__item">
                            <img className="card__item--image" src={Images12} alt="" />
                            <h2 className="card__item--head">Xorazim viloyati</h2>
                            <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="item__box--wrapper">
                                <div className="card__item--location">Shimoliy-sharqiy</div>
                                <div className="card__item--num">231</div>
                            </div>
                            <a className="card__item--link" href="#">Batafsil</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}