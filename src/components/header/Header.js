import React from 'react';
import { Link } from 'react-scroll'
import './Header.css';
import Logo from '../../images/CM-white.png';

function Header() {
    const [yOffset, setYOffset] = React.useState(window.pageYOffset);
    const [scrolled, setScrolled] = React.useState(false)
;
    React.useEffect(() => {
        function changePageYOffset() {
            setYOffset(window.pageYOffset);
        }

        window.addEventListener('scroll', changePageYOffset);

        if (yOffset >= window.innerHeight * 0.7) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }

        return() => window.removeEventListener('scroll', changePageYOffset);
    }, [yOffset]);

    return (
        <header className={`header ${scrolled ? 'header_scroll' : ''}`}>
            <Link className="logo-link logo-link_type_white" to="lead" smooth={true}><img className="logo" src={Logo} alt="" /></Link>
            <input className="header__menu-btn" type="checkbox" id="header__menu-btn" />
            <label className="header__menu-icon" htmlFor="header__menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li className="header__list"><Link className="header__link" activeClass="active" to="lead" smooth={true}>Home</Link></li>
                <li className="header__list"><Link className="header__link" activeClass="active" to="about" smooth={true} offset={-50}>About</Link></li>
                <li className="header__list"><Link className="header__link" activeClass="active" to="projects" smooth={true} offset={30}>Portfolio</Link></li>
                <li className="header__list"><Link className="header__link" activeClass="active" to="contact" smooth={true}>Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header;