import styled from 'styled-components';
import { ContainerApp } from '../../styles/GlobalStyles';

export const Container = styled.div``;

export const Appdiv = styled.div`
  padding-bottom: 30px;
`;

export const DescriptionBar = styled(ContainerApp)`
  display: grid;
  background: #fff;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 100%;
  height: 80px;
  margin: 10px 60px 0 60px;
  gap: 30px;
  border-radius: 20px;
  color: #672beb;
  h1 {
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 20px;
    box-sizing: content-box;
  }
  button {
    border: none;
    background: #fff;
  }
  button:hover {
    border: solid #672beb;
  }
`;
