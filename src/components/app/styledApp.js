import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  background: ${(props) => (props.draculaMode ? '#A0A9BA' : '')};
`;


export const DraculaButtonContainer = styled.div`
  position: fixed;
  width: 125px;
  height: 150px;
  top: 200px;
  left: ${(props) => (props.isDraculaHovered ? '-10px' : '-45px')};
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  z-index: 3;
`;

export const EmojiSpan = styled.span`
  position: absolute;
  opacity: 1;
  transition: all 0.4s ease;
  left: 9.5px;
  top: 4px;
`;

export const TextSpan = styled.span`
  position: absolute;
  width: 100px;
  text-align: center;
  font-size: 11px;
  opacity: 0;
  transition: all 0.4s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DraculaButton = styled.div`
  overflow: hidden;
  position: relative;
  color: white;
  height: 5px;
  width: 15px;
  left: 25px;
  padding: 10px 10px;
  background: ${(props) => (props.draculaMode ? '#892738' : 'grey')};
  border: 3px solid #2b303b;
  border-radius: 25px;
  transform: scale(1);
  transition: all 0.4s ease;
  opacity: 0.4;
  user-select: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    height: 10px;
    width: 100px;
    opacity: 1;
  }

  &:hover ${EmojiSpan} {
    opacity: 0;
  }

  &:hover ${TextSpan} {
    opacity: 1;
  }
`;
