import { Link } from "react-router-dom";

// images
import Logo from "../../Assets/images/logo.png";
import search from "../../Assets/images/search.svg";

export default function Header() {
    return (
        <section>
            <div className="container">
                <header className="header">
                    <img src={Logo} width={112} height={47} alt="logo" />
                    <ul className="header__list">
                        <li className="header__item"><a className="header__item--link active" href="/">Bosh sahifa</a></li>
                        <li className="header__item"><a className="header__item--link" href="/">Shaharlar</a></li>
                        <li className="header__item"><a className="header__item--link" href="/">Muhim malumotlar</a></li>
                        <li className="header__item"><a className="header__item--link" href="/">Kontakt</a></li>
                        <li className="header__item"><a className="header__item--link" href="/">Biz haqimizda</a></li>
                    </ul>
                    <div className="select__wrapper">
                        <select className="header__select" id="selected">
                            <option className="header__option" value="en">English</option>
                            <option className="header__option" value="en">Russia</option>
                            <option className="header__option" value="en">Uzbek</option>
                        </select>
<<<<<<< HEAD
                            <div className="input__wrapper">
                                <img className="header__search" src={search} width={24} height={24} alt="search" />
                                <input className="header__search--input" type="text" placeholder="Search..."/>
                            </div>
=======
                        <input className="header__search--input" type="text" placeholder="Search" />
>>>>>>> 4cf7ac3a89f4820ea9cccf0be9585ca92ab21ee8
                    </div>
                </header>
            </div>
        </section>
    )
}