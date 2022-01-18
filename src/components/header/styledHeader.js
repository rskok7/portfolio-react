import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9998;
  width: 100vw;
  background-color: ${(props) => {
    if (props.scrolled && props.draculaMode) {
      return '#892738';
    } else if (props.scrolled) {
      return '#7cd5df';
    } else {
      return '';
    }
  }};

  @media (max-width: 510px) {
    margin: 0;
    width: 100%;
    z-index: 3;
    display: flex;
    top: 0px;
    height: auto;
  }
`;

export const LogoLink = styled(Link)`
  margin: auto 0;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-top: 9px;
  margin-bottom: 9px;
  margin-left: 30px;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin-left: 15px;
  }

  @media (max-width: 510px) {
    margin-left: 5px;
  }
`;

export const HeaderMenuButton = styled.input`
  display: none;

  &:hover {
    color: rgba(124, 213, 223, 0.5);
  }
`;

export const HeaderMenuIcon = styled.label`
  @media (max-width: 510px) {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline-block;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    align-self: center;
  }
`;

export const Navicon = styled.span`
  @media (max-width: 510px) {
    background: ${(props) => (props.isMenuOpen ? 'transparent' : 'white')};
    display: block;
    height: 3px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 25px;

    &:before,
    &:after {
      background: white;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }

    &:before {
      top: ${(props) => (props.isMenuOpen ? '0px' : '7px')};
      transform: ${(props) => (props.isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }

    &:after {
      top: ${(props) => (props.isMenuOpen ? '0' : '-7px')};
      transform: ${(props) => (props.isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: auto;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 25px;
  }

  @media (max-width: 510px) {
    margin-right: 20px;
    display: block;
    max-height: ${(props) => (props.isMenuOpen ? '300px' : '0px')};
    transition: max-height 0.5s ease;
    position: absolute;
    top: 84px;
    right: 0;
    overflow: hidden;
    background-color: ${(props) => (props.draculaMode ? '#ccd3de' : 'white')};
    border-radius: 7px;
    box-shadow: ${(props) =>
      props.draculaMode
        ? '1px 1px 15px rgba(86, 97, 118, 0.3), -1px 1px 15px rgba(86, 97, 118, 0.3)'
        : '1px 1px 15px rgba(167, 167, 167, 0.3), -1px 1px 15px rgba(167, 167, 167, 0.3)'};
  }
`;

export const HeaderList = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 510px) {
    margin-right: 0;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: opacity 0.4s ease;
  user-select: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (max-width: 510px) {
    display: block;
    margin: 25px 60px 25px 30px;
    text-decoration: none;
    text-align: left;
    color: ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};
  }
`;
