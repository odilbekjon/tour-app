import { Link } from "react-router-dom";

// images
import Logo from "../../Assets/images/logo.png";
import search from "../../Assets/images/search.svg";

export default function Header() {
    return (
        <section>
            <div className="container">
                <header className="header">
                    <Link to={'/'} className="header__link--logo"><img src={Logo} width={112} height={47} alt="logo" /></Link>
                    <ul className="header__list">
                        <li className="header__item active"><Link to={'/'}><a className="header__item--link link-active" href="/">Bosh sahifa</a></Link></li>
                        <li className="header__item"><Link to={'/cities'}><a className="header__item--link" href="/">Shaharlar</a></Link></li>
                        <li className="header__item"><Link to={'/malumotlar'}><a className="header__item--link" href="/">Muhim malumotlar</a></Link></li>
                        <li className="header__item"><Link to={'/contact'}><a className="header__item--link" href="/">Kontakt</a></Link></li>
                        <li className="header__item"><Link to={'/about'}><a className="header__item--link" href="/">Biz haqimizda</a></Link></li>
                    </ul>
                    <div className="select__wrapper">
                        <select className="header__select" id="selected">
                            <option className="header__option" value="en">English</option>
                            <option className="header__option" value="en">Russia</option>
                            <option className="header__option" value="en">Uzbek</option>
                        </select>
                            <div className="input__wrapper">
                                <img className="header__search" src={search} width={24} height={24} alt="search" />
                                <input className="header__search--input" type="text" placeholder="Search..."/>
                            </div>
                    </div>
                </header>
            </div>
        </section>
    )
}