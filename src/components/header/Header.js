import React from 'react';
import './Header.css';
import Logo from '../../images/CM-white.png';

function Header() {
    return (
        <header className="header header_grey">
            <a className="logo-link logo-link_type_white" href="index.html"><img className="logo" src={Logo} alt="" /></a>
            <input className="header__menu-btn" type="checkbox" id="header__menu-btn" />
            <label className="header__menu-icon" htmlFor="header__menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li className="header__list"><a className="header__link" href="#home">Home</a></li>
                <li className="header__list"><a className="header__link" href="#about">About</a></li>
                <li className="header__list"><a className="header__link" href="#portfolio">Portfolio</a></li>
                <li className="header__list"><a className="header__link" href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;