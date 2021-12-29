import styled from 'styled-components';

export const LeadSection = styled.section`
  height: 85vh;
  width: 100vw;
  margin-top: -112px;
  z-index: 3;
  background-color: #7cd5df;
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

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LeadImage = styled.img`
  max-width: 250px;
  width: 100%;

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
