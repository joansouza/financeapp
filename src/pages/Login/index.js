import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/index';
import { auth } from '../../config/firebase-config';

import * as S from './styles';

function Login() {
  const route = useNavigate();
  const { singin } = useAuth();
  const loginEmail = useRef();
  const loginPassword = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await singin(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      ).then(() => route('/dashboard'));
    } catch (error) {
      alert('email ou senha inválidos!');
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
          <input placeholder="Email" type="text" ref={loginEmail} />
          <input placeholder="senha" type="password" ref={loginPassword} />
          <button type="submit">ENTRAR</button>
        </S.Form>
      </S.FormDiv>
    </S.Container>
  );
}

export default Login;
