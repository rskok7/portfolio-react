import styled from 'styled-components';

export const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
  font-family: 'Nunito', sans-serif;
  display: ${(props) => (!props.$loading ? '' : 'none')};
`;

export const LoadingScreenComponent = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: all 0.7s ease;
  overflow: hidden;

  opacity: ${(props) => (props.$loading ? '' : '0')}
  visibility: ${(props) => (props.$loading ? '' : 'hidden')}
`;

export const LoadingScreenLogo = styled.img`
  @media (max-width: 510px) {
    max-width: 510px;
    width: 100%;
  }
`;

export const DraculaButton = styled.button`
  position: fixed;
  color: white;
  top: 200px;
  left: 25px;
  padding: 10px 10px;
  background-color: ${(props) => (props.$draculaMode ? 'purple' : 'grey')};
  border: 3px solid black;
  border-radius: 25px;
  z-index: 3;
  transform: scale(1);
  transition: transform 0.4s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;
