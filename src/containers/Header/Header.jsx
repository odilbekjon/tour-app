import { Link } from "react-router-dom";
import useLang from "../../Hook/useLang";
import content from "../../Localization/content";
import './header.scss';

// images
import Logo from "../../Assets/images/logo.png";
import search from "../../Assets/images/search.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
    let classNames = require('classnames')

  const [lang, setLang] = useLang();

  // LANG
  const onChangeLang = (e) => {
    setLang(e.target.value);
  };

    const menu = [
        {
            name: 'Bosh sahifa',
            path: '/'
        },
        {
            name: 'Shaharlar',
            path: '/cities'
        },
        {
            name: 'Muhim ma`lumotlar',
            path: '/data'
        },
        {
            name: 'Kontakt',
            path: '/contact'
        },
        {
            name: 'Biz haqimizda',
            path: '/about'
        },
    ]
    let loc = useLocation()


    console.log(loc);
    return (
        <section>
            <div className="container">
                <header className="header">
                    <Link to='/' className="header__link--logo">
                        <img src={Logo} width={112} height={47} alt="logo" />
                    </Link>
                    <ul className="header__list">
                        {
                            menu.map((item, key) => {
                                let activeLink = classNames({
                                    header__item: true,
                                    active: loc.pathname === item.path
                                })
                                return (
                                    <li className={activeLink} key={key}>
                                        <Link to={item.path} className='header__item__link'>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="select__wrapper">
                        <select
                        defaultValue={lang}
                        onChange={(e) => onChangeLang(e)}
                         className="header__select" id="selected">
                            <option className="header__option" value="en">English</option>
                            <option className="header__option" value="ru">Russia</option>
                            <option className="header__option" value="uz">Uzbek</option>
                        </select>
                        <div className="input__wrapper">
                            <Link className="header__search--input" to={'/filter'}>
                            <img className="header__search" src={search} width={24} height={24} alt="search" /> 
                            Search..</Link>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    )
}