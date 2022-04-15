import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: #fff;
  color: #000;
  max-width: 60%;
  height: 60%;
  border-radius: 20px;
`;
export const AppDiv = styled.div``;
export const CloseButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 20px 20px 0;
  button {
    background: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    border: none;
    cursor: pointer;
  }
`;
