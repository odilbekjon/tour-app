import { Link } from "react-router-dom";

// images
import Logo from "../../Assets/images/logo.png";

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
                    <select className="header__select" id="selected">
                        <option className="header__option" value="en">English</option>
                        <option className="header__option" value="en">Russia</option>
                        <option className="header__option" value="en">Uzbek</option>
                    </select>
                    <input className="header__search--input" type="text" placeholder="Search" />
                </header>
            </div>
        </section>
    )
}