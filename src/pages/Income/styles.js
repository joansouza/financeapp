import styled from 'styled-components';
import { ContainerApp } from '../../styles/GlobalStyles';

export const Container = styled.div``;
export const AddButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 60px 20px 0px;
  button {
    background: #672beb;
    color: #fff;
    width: 160px;
    height: 60px;
    border-radius: 30px;
  }
  button:hover {
    border: solid #fff;
  }
`;

export const Appdiv = styled.div`
  padding-bottom: 30px;
`;

export const DescriptionBar = styled(ContainerApp)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  max-width: 100%;
  margin: 10px 60px 0 60px;
  background: #672beb;
  color: #fff;
  border-radius: 20px;
  gap: 30px;
  h1 {
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 20px;
  }
`;
export const GeneralInfo = styled.div`
  display: flex;
`;
