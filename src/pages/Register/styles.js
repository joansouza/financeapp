import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerApp } from '../../styles/GlobalStyles';

export const StyledLink = styled(Link)`
  color: black;
  background-color: #fff;
  border-bottom: solid 1px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const EnterButtons = styled.div`
  a:hover {
    color: #672beb;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const FormDiv = styled(ContainerApp)`
  width: 400px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 30px;
    font-size: 15px;
    margin-top: 20px;
    padding: 3px;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
  }
  button:hover {
    filter: brightness(85%);
  }
`;
export const Img = styled.div`
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
    padding-left: 10px;
  }
`;
