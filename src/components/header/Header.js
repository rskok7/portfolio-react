import React, { useEffect, useState, createRef, useContext } from 'react';
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
import { DraculaContext } from '../app/App';

function Header() {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabletDisplayWidth, setTabletDisplayWidth] = useState(false);
  const [smallMobileDisplayWidth, setSmallMobileDisplayWidth] = useState(false);
  const draculaMode = useContext(DraculaContext);
  // const menuRef = createRef();
  // const naviconRef = createRef();

  // sets background color based on page scroll
  useEffect(() => {
    function changePageYOffset() {
      setYOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', changePageYOffset);
    if (yOffset >= window.innerHeight * 0.75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    return () => window.removeEventListener('scroll', changePageYOffset);
  }, [yOffset]);

  // measures pageWidth for mobile menu
  useEffect(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia('(max-width: 769px)');
      const smallWindowWidth = window.matchMedia('(max-width: 400px)');
      if (windowWidth.matches) {
        setTabletDisplayWidth(true);
      } else {
        setTabletDisplayWidth(false);
      }

      if (smallWindowWidth.matches) {
        setSmallMobileDisplayWidth(true)
      } else {
        setSmallMobileDisplayWidth(false)
      }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  });

  // toggles mobile menu open
  function onNavClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  // close menu with ESC key
  useEffect(() => {
    function keyPress(e) {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  });

  return (
    <HeaderSection scrolled={scrolled} draculaMode={draculaMode}>
      <LogoLink to='lead' smooth={true} onClick={() => setIsMenuOpen(false)}>
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
      <Menu isMenuOpen={isMenuOpen} draculaMode={draculaMode}>
        <HeaderList>
          <HeaderLink
            activeClass='active'
            to='lead'
            smooth={true}
            onClick={onNavClick}
            draculaMode={draculaMode}>
            Home
          </HeaderLink>
        </HeaderList>
        <HeaderList>
          <HeaderLink
            activeClass='active'
            to='about'
            smooth={true}
            onClick={onNavClick}
            offset={tabletDisplayWidth ? -70 : -25}
            draculaMode={draculaMode}>
            About
          </HeaderLink>
        </HeaderList>
        <HeaderList>
          <HeaderLink
            activeClass='active'
            to='projects'
            smooth={true}
            onClick={onNavClick}
            offset={smallMobileDisplayWidth ? -20 : 40}
            draculaMode={draculaMode}>
            Portfolio
          </HeaderLink>
        </HeaderList>
        <HeaderList>
          <HeaderLink
            activeClass='active'
            to='contact'
            smooth={true}
            onClick={onNavClick}
            draculaMode={draculaMode}>
            Contact
          </HeaderLink>
        </HeaderList>
      </Menu>
    </HeaderSection>
  );
}

export default Header;
