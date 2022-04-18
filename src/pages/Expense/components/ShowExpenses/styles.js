import styled from 'styled-components';

export const DescriptionBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 100%;
  margin: 10px 60px 0 60px;
  background: #672beb;
  color: #fff;
  border-radius: 20px;
  gap: 30px;
  select {
    color: #fff;
    background-color: #672beb;
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 20px;
    border: none;
    option {
      font-size: 15px;
    }
  }
  h1 {
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 20px;
  }
`;
export const GeneralInfo = styled.div`
  display: flex;
`;
