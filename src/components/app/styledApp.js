import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  background: ${(props) => (props.draculaMode ? 'var(--draculaGrey)' : '')};
`;

export const EmojiSpan = styled.span`
  position: absolute;
  opacity: 1;
  transition: all 0.4s ease;
  left: 7px;
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
  width: 35px;
  right: 20px;
  padding: 10px 10px;
  background: ${(props) => (props.draculaMode ? 'var(--red)' : 'grey')};
  border: 2px solid #2b303b;
  border-radius: 25px;
  transform: scale(1);
  transition: all 0.4s ease;
  user-select: none;
  opacity: 0.8;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
  }

  @media (max-width: 510px) {
    -webkit-tap-highlight-color: transparent;
  }
`;

export const DraculaButtonContainer = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  top: 200px;
  right: -50px;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 3;
  border: 1px solid red;
  @media (hover: hover) {
    &:hover {
      right: -5px;
    }

    &:hover ${EmojiSpan} {
      opacity: 0;
    }

    &:hover ${TextSpan} {
      opacity: 1;
    }

    &:hover ${DraculaButton} {
      height: 10px;
      width: 100px;
      opacity: 1;
    }
  }

  @media (max-width: 510px) {
    width: 50px;
    height: 150px;
    top: 200px;
    right: -43px;
    &:hover {
      right: -43px;
    }

    &:hover ${EmojiSpan} {
      opacity: 1;
    }

    &:hover ${TextSpan} {
      opacity: 0;
    }

    &:hover ${DraculaButton} {
      height: 5px;
      width: 35px;
      opacity: 1;
    }
  }
`;
