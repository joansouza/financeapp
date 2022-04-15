import styled from 'styled-components';
import Modal from '../../../../components/AppModal';

export const FormDiv = styled(Modal)`
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  select {
    height: 30px;
    width: 400px;
    font-size: 15px;
    margin: 20px 20px 20px 20px;
    padding: 3px;
    border: none;
    border-bottom: solid 1px;
  }
  input {
    height: 30px;
    width: 400px;
    font-size: 15px;
    margin: 20px 20px 20px 20px;
    padding: 3px;
  }
  button {
    margin-top: 20px;
  }
  button:hover {
    filter: brightness(85%);
  }
`;
