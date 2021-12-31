import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #232323;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 510px) {
    height: 75px;
  }
`;

export const FooterText = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 510px) {
    font-size: 10px;
    margin-bottom: 3px;
  }
`;
