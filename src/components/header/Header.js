import React from 'react';
import { Link } from 'react-scroll';
import {
  HeaderSection,
  LogoLink,
  Logo,
  HeaderMenuButton,
  HeaderMenuIcon,
  Navicon,
  Menu,
  HeaderList,
  HeaderLink,
} from './styledHeader';
import LogoImage from '../../images/logos/cm-logo_white.png';

function Header() {
  const [yOffset, setYOffset] = React.useState(window.pageYOffset);
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mobileWidth, setMobileWidth] = React.useState(false);

  React.useEffect(() => {
    function changePageYOffset() {
      setYOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', changePageYOffset);
    if (yOffset >= window.innerHeight * 0.7) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    return () => window.removeEventListener('scroll', changePageYOffset);
  }, [yOffset]);

  React.useEffect(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia('(max-width: 769px)');
      if (windowWidth.matches) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  });

  function onNavClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderSection $scrolled={scrolled}>
      <LogoLink to='lead' smooth={true}>
        <Logo src={LogoImage} alt='' />
      </LogoLink>

      <HeaderMenuButton
        type='checkbox'
        id='header__menu-btn'
        onClick={onNavClick}
        checked={isMenuOpen ? true : false}
      />
      <HeaderMenuIcon htmlFor='header__menu-btn'>
        <Navicon isMenuOpen={isMenuOpen}></Navicon>
      </HeaderMenuIcon>
      <Menu isMenuOpen={isMenuOpen}>
        <HeaderList>
          <HeaderLink activeClass='active' to='lead' smooth={true} onClick={onNavClick}>
            Home
          </HeaderLink>
        </HeaderList>
        <HeaderList>
          <HeaderLink
            activeClass='active'
            to='about'
            smooth={true}
            onClick={onNavClick}
            offset={mobileWidth ? -70 : 0}>
            About
          </HeaderLink>
        </HeaderList>
        <HeaderList>
          <HeaderLink
            activeClass='active'
            to='projects'
            smooth={true}
            onClick={onNavClick}
            offset={80}>
            Portfolio
          </HeaderLink>
        </HeaderList>
        <HeaderList>
          <HeaderLink activeClass='active' to='contact' smooth={true} onClick={onNavClick}>
            Contact
          </HeaderLink>
        </HeaderList>
      </Menu>
    </HeaderSection>
  );
}

export default Header;
