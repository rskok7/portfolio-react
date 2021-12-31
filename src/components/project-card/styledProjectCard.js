import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  align-self: center;
  position: relative;
  transition: transform 0.4s ease;
  height: 100%;

  &:hover {
    transform: translate(-2px, -2px);
  }

  @media (max-width: 510px) {
    max-height: 700px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
      props.draculaMode ? 'rgba(124, 130, 142, 0.7)' : 'rgba(233, 240, 243, 0.7)'};
    padding: 20px 0;
    border-radius: 25px;

    &:hover {
      transform: translate(0, 0);
    }
  }
`;

export const ProjectImageLink = styled.a`
  @media (max-width: 510px) {
    display: flex;
    justify-content: center;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  box-shadow: ${(props) =>
    props.draculaMode
      ? '0px 10px 0px rgba(124, 130, 142, 0.7)'
      : '0px 10px 1px rgba(233, 240, 243, 0.7)'};
  @media (max-width: 510px) {
    width: 90%;
    margin: auto;
  }
`;

export const ProjectOverlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 510px) {
    position: relative;
    opacity: 1;
    background: transparent;
  }
`;

export const ProjectTextContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProjectText = styled.p`
  width: 90%;
  color: white;
  font-size: 16px;
  line-height: 2;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  @media (max-width: 510px) {
    color: black;
    padding: 5px 0;
    position: static;
    width: 90%;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  margin-bottom: 30px;

  @media (max-width: 510px) {
    margin-bottom: 0;
    width: 50%;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  padding: 10px 0;
  color: white;
  font-weight: 400;
  cursor: pointer;
  width: 60px;
`;

export const ProjectIcon = styled.img`
  width: 50px;
  transition: transform 0.4s ease;

  &:hover {
    transform: translate(-3px, -3px);
  }
`;
