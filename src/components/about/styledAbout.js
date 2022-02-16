import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 90%;
  margin: 200px auto 100px auto;
  display: flex;
  flex-direction: column;
  max-width: 1152px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const AboutIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: auto;
  margin-top: 5px;
  width: 95%;

  @media (max-width: 666px) {
    margin-top: 15px;
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const AboutIcon = styled.img`
  margin-bottom: 20px;
  width: 70%;
  max-width: 100px;
  display: ${(props) => (props.draculaMode ? 'none' : 'block')};

  @media (max-width: 666px) {
    max-width: 60px;
  }

  @media (max-width: 510px) {
    max-width: 80px;
  }

  @media (max-width: 400px) {
    max-width: 50px;
  }
`;

export const AboutIconDracula = styled.img`
  margin-bottom: 20px;
  width: 70%;
  max-width: 100px;
  display: ${(props) => (props.draculaMode ? 'block' : 'none')};

  @media (max-width: 666px) {
    max-width: 60px;
  }

  @media (max-width: 510px) {
    max-width: 80px;
  }

  @media (max-width: 400px) {
    max-width: 50px;
  }
`;

export const AboutNavigator = styled.div`
  width: 100%;
  margin: 20px auto 140px auto;
  visibility: hidden;

  @media (max-width: 768px) {
    margin: 0 auto 100px auto;
  }
`;

export const AboutExterior = styled.div``;

export const AboutTitle = styled.h2`
  text-align: left;
  font-size: 55px;
  margin: 0;
  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 510px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 25px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const AboutInfo = styled.article`
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 100px;

  @media (max-width: 666px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    font-size: 35px;
  }

  @media (max-width: 320px) {
    margin-bottom: 75px;
  }
`;

export const AboutIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  flex-basis: 50%;
  max-width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    flex-basis: 48%;
  }

  @media (max-width: 666px) {
    margin-top: 10px;
    margin-bottom: 40px;
    max-width: 75%;
  }
`;

export const AboutImage = styled.img`
  object-fit: contain;
  object-position: top;
  width: 100%;
  margin-top: 10%;

  @media (max-width: 666px) {
    margin: 0;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
  padding: 30px 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: auto;
  font-size: 20px;
  line-height: 2;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 666px) {
    width: 100%;
  }

  @media (max-width: 510px) {
    padding: 15px 0;
  }

  @media (max-width: 320px) {
    width: 90%;
    font-size: 12px;
  }
`;

export const AboutParagraph = styled.p`
  @media (max-width: 666px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
  }
`;

export const AboutAnimationLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};
  font-weight: bold;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const IconLink = styled.a`
  transition: opacity 0.4s ease, transform 0.4s ease;

  &:hover {
    opacity: 0.5;
    transform: translate(-3px, -3px);
  }
`;

export const PlacesIcon = styled.img`
  width: 80px;

  @media (max-width: 666px) {
    width: 45px;
  }

  @media (max-width: 510px) {
    width: 35px;
  }
`;

export const AboutLists = styled.article`
  display: flex;
  justify-content: center;
  border: 2px solid rgba(233, 240, 243, 0.7);
  border-radius: 25px;
  max-width: 768px;
  margin: auto;
  box-shadow: ${(props) =>
    props.draculaMode
      ? '5px 5px rgba(124, 130, 142, 0.7)'
      : '5px 5px rgba(233, 240, 243, 0.7)'};
  margin-top: 150px;
  background: ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};

  @media (max-width: 666px) {
    max-width: 666px;
    width: 100%;
  }

  @media (max-width: 510px) {
    max-width: 510px;
    width: 90%;
  }

  @media (max-width: 400px) {
    max-width: 400px;
    margin-top: 100px;
    padding: 0 10px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
    width: 100%;
    margin-top: 0;
    padding: 0;
  }
`;

export const ListTypeLanguages = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
`;

export const ListTypeLearning = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  padding: 0 20px;
  border-right: 2px solid rgba(233, 240, 243, 0.7);
  border-left: 2px solid rgba(233, 240, 243, 0.7);

  @media (max-width: 666px) {
    padding: 0 10px;
  }
`;

export const ListTypeTools = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
`;

export const ListInteriorTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  font-weight: 700;
  height: 100px;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 666px) {
    font-size: 30px;
    margin-bottom: 0;
  }

  @media (max-width: 510px) {
    font-size: 22px;
  }

  @media (max-width: 400px) {
    font-size: 19px;
  }

  @media (max-width: 320px) {
    height: 60px;
  }
`;

export const ListInteriorList = styled.ul`
  margin-top: 0px;
  list-style: none;
  padding: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 400px) {
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const ListInteriorListItem = styled.li`
  font-size: 28px;
  margin: 20px auto;

  @media (max-width: 666px) {
    font-size: 20px;
    margin: 15px auto;
  }

  @media (max-width: 510px) {
    margin: 15px auto;
    font-size: 17px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    margin: 12px 0;
  }
`;
