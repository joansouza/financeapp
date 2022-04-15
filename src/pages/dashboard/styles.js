import styled from 'styled-components';
import { ContainerApp } from '../../styles/GlobalStyles';

export const Container = styled.div`
  margin-bottom: 10px;
`;
export const TitleDiv = styled.div`
  font-size: 40px;
  font-family: sans-serif;
  margin: 20px 0 0 20px;
`;
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Content = styled(ContainerApp)`
  h1 {
    margin-bottom: 20px;
  }
  box-shadow: none;
  max-width: 640px;
  width: 560px;
  height: 400px;
`;
export const AppDiv = styled.div`
  padding-bottom: 20px;
`;
export const ContentMonth = styled(ContainerApp)`
  margin-top: 200px;
  h1 {
    margin-bottom: 20px;
  }
  max-width: 100%;
  width: 1180px;
  height: 400px;
`;
