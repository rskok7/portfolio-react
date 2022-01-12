import styled from 'styled-components';

export const LeadSection = styled.section`
  height: 85vh;
  width: 100vw;
  margin-top: -112px;
  z-index: 3;
  background: ${(props) =>
    props.draculaMode ? 'linear-gradient(45deg, #804c79, #46338E)' : '#7cd5df'};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 510px) {
    padding-top: 100px;
  }

  @media (max-width: 320px) {
    height: 75vh;
  }
`;

export const LeadContainer = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LeadImageRegular = styled.img`
  max-width: 250px;
  width: 100%;
  display: ${(props) => (props.draculaMode ? 'none' : 'block')};

  @media (max-width: 510px) {
    max-width: 200px;
  }

  @media (max-width: 320px) {
    max-width: 175px;
  }
`;

export const LeadImageDracula = styled.img`
  max-width: 250px;
  width: 100%;
  display: ${props => props.draculaMode ? 'block' : 'none'};

  @media (max-width: 510px) {
    max-width: 200px;
  }

  @media (max-width: 320px) {
    max-width: 175px;
  }
`;

export const LeadTitle = styled.h1`
  font-size: 75px;
  margin-top: 20px;
  margin-bottom: 15px;

  @media (max-width: 510px) {
    font-size: 50px;
  }

  @media (max-width: 320px) {
    font-size: 35px;
  }
`;

export const LeadSubtitle = styled.p`
  text-align: center;
  font-size: 30px;
  text-align: center;
  margin: auto;

  @media (max-width: 510px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 15px;
  }
`;

export const CurvedBottom = styled.img`
  margin-top: -10px;
  object-fit: fill;
  width: 100vw;
  visibility: ${(props) => (props.draculaMode ? 'hidden' : 'visible')};
`;
