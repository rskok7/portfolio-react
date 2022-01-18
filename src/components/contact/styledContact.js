import styled from 'styled-components';

export const ContactSection = styled.section`
  text-align: center;
  padding: 250px 0;
  /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
  width: 90%;
  margin: auto;

  @media (max-width: 510px) {
    width: 90%;
    margin: auto;
    padding: 200px 0;
  }

  @media (max-width: 400px) {
    padding: 150px 0;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 50px;
  margin: 0;
  margin-bottom: 25px;

  @media (max-width: 666px) {
    font-size: 40px;
    margin: 0;
  }

  @media (max-width: 510px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
    margin: 0;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 25px;
  margin-bottom: 65px;

  @media (max-width: 666px) {
    font-size: 20px;
    margin-bottom: 25px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    margin-bottom: 25px;
  }
`;

export const ContactButton = styled.a`
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  height: 50px;
  line-height: 50px;
  width: 350px;
  font-size: 32px;
  background-color: transparent;
  border: 3px solid ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};
  border-radius: 65px;
  padding: 10px 55px;
  color: ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};
  font-weight: 400;
  transition: 0.4s ease;
  text-decoration: none;

  &:hover {
    color: white;
    /* background-color: #3ac0cf; */
    background: ${(props) => (props.draculaMode ? '#892738' : '#7cd5df')};
    cursor: pointer;
  }

  @media (max-width: 510px) {
    width: 250px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
`;
