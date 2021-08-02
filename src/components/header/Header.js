import React from 'react';
import './Header.css';

function Header() {
    return (
        <header class="header header_grey">
            <a class="logo-link logo-link_type_white" href="index.html"><img class="logo" src="./images/CM-white.png" alt="" /></a>
            <input class="header__menu-btn" type="checkbox" id="header__menu-btn" />
            <label class="header__menu-icon" for="header__menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li class="header__list"><a class="header__link" href="#home">Home</a></li>
                <li class="header__list"><a class="header__link" href="#about">About</a></li>
                <li class="header__list"><a class="header__link" href="#portfolio">Portfolio</a></li>
                <li class="header__list"><a class="header__link" href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;