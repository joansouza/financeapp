import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/index';
import { auth } from '../../config/firebase-config';
import * as S from './styles';

function Register() {
  const { singup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const route = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await singup(auth, email, password).then(route('/dashboard'));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <S.Container>
      <S.Img>
        <img src="img/finance.png" alt="aaa" />
      </S.Img>
      <S.FormDiv>
        <title>Login</title>
        <S.EnterButtons>
          <S.StyledLink to="/">ENTRAR</S.StyledLink>
          <S.StyledLink to="/register">CADASTRAR</S.StyledLink>
        </S.EnterButtons>

        <S.Form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">ENTRAR</button>
        </S.Form>
      </S.FormDiv>
    </S.Container>
  );
}

export default Register;
