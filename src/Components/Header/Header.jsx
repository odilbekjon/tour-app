import { NavLink , Link} from "react-router-dom";

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
                        <li className="header__item "><NavLink to={'/'}><a className="header__item--link" href="/">Bosh sahifa</a></NavLink></li>
                        <li className="header__item"><NavLink to={'/cities'}><a className="header__item--link" href="/">Shaharlar</a></NavLink></li>
                        <li className="header__item"><NavLink to={'/malumotlar'}><a className="header__item--link" href="/">Muhim malumotlar</a></NavLink></li>
                        <li className="header__item"><NavLink to={'/contact'}><a className="header__item--link" href="/">Kontakt</a></NavLink></li>
                        <li className="header__item"><NavLink to={'/about'}><a className="header__item--link" href="/">Biz haqimizda</a></NavLink></li>
                    </ul>
                    <div className="select__wrapper">
                        <select className="header__select" id="selected">
                            <option className="header__option" value="en">English</option>
                            <option className="header__option" value="en">Russia</option>
                            <option className="header__option" value="en">Uzbek</option>
                        </select>
                            <div className="input__wrapper">
                                <img className="header__search" src={search} width={24} height={24} alt="search" />
                                <Link className="header__search--input" to={'/'}>Search..</Link>
                            </div>
                    </div>
                </header>
            </div>
        </section>
    )
}