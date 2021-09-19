import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Logo from "../../images/logos/cm-logo_white.png";

function Header() {
  const [yOffset, setYOffset] = React.useState(window.pageYOffset);
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mobileWidth, setMobileWidth] = React.useState(false);

  React.useEffect(() => {
    function changePageYOffset() {
      setYOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", changePageYOffset);
    if (yOffset >= window.innerHeight * 0.7) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    return () => window.removeEventListener("scroll", changePageYOffset);
  }, [yOffset]);

  React.useEffect(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia("(max-width: 769px)");
      if (windowWidth.matches) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  });

  function onNavClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`header ${scrolled ? "header_scroll" : ""}`}>
      <Link className="logo-link logo-link_type_white" to="lead" smooth={true}>
        <img className="logo" src={Logo} alt="" />
      </Link>
      <input
        className="header__menu-btn"
        type="checkbox"
        id="header__menu-btn"
        onClick={onNavClick}
        checked={isMenuOpen ? true : false}
      />
      <label className="header__menu-icon" htmlFor="header__menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className={`menu ${isMenuOpen ? "menu-active" : "menu-inactive"}`}>
        <li className="header__list">
          <Link
            className="header__link"
            activeClass="active"
            to="lead"
            smooth={true}
            onClick={onNavClick}
          >
            Home
          </Link>
        </li>
        <li className="header__list">
          <Link
            className="header__link"
            activeClass="active"
            to="about"
            smooth={true}
            onClick={onNavClick}
            offset={mobileWidth ? -70 : 0}
          >
            About
          </Link>
        </li>
        <li className="header__list">
          <Link
            className="header__link"
            activeClass="active"
            to="projects"
            smooth={true}
            offset={30}
            onClick={onNavClick}
            offset={80}
          >
            Portfolio
          </Link>
        </li>
        <li className="header__list">
          <Link
            className="header__link"
            activeClass="active"
            to="contact"
            smooth={true}
            onClick={onNavClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
