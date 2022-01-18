import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding-top: 100px;

  @media (max-width: 400px) {
    padding-top: 0;
  }
`;

export const ProjectsTextGroup = styled.div`
  padding-top: 125px;
  padding-bottom: 250px;
  width: 100%;
  margin: 0 auto 50px auto;
  position: relative;
  background: ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};

  @media (max-width: 320px) {
    padding: 70px 0 225px 0;
  }
`;

export const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  margin-top: 0;
  color: white;

  @media (max-width: 400px) {
    font-size: 40px;
  }

  @media (max-width: 320px) {
    width: 90%;
    font-size: 35px;
    margin: auto;
    margin-bottom: 30px;
  }
`;

export const ProjectsSubtitle = styled.p`
  text-align: center;
  font-size: 29px;
  line-height: 2;
  margin-top: 0;
  color: white;
  margin: auto;
  max-width: 800px;
  width: 65%;

  @media (max-width: 510px) {
    font-size: 20px;
    width: 80%;
  }

  @media (max-width: 400px) {
    font-size: 17px;
    width: 95%;
  }

  @media (max-width: 320px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const ProjectsGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 48px;
  grid-column-gap: 40px;
  justify-content: center;
  margin: auto;
  padding: 70px 0;
  width: 90%;
  max-width: 1126px;
  position: relative;
  z-index: 2;
  margin-top: -275px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 691px;
    padding: 0;
  }

  @media (max-width: 510px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin-top: -225px;
  }

  @media (max-width: 320px) {
    width: 90%;
    grid-row-gap: 30px;
  }
`;
