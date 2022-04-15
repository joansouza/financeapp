import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './styles';
import { auth } from '../../config/firebase-config';
import { useAuth } from '../../context/auth/index';

export default function Header() {
  const { currentUser } = useAuth();
  const redirect = useNavigate();
  const logout = () => {
    signOut(auth);
    redirect('/login');
  };

  return (
    <S.Nav>
      <S.Conteiner>
        <button type="button" onClick={logout}>
          sing out
        </button>
      </S.Conteiner>

      <Link to={`/income/${currentUser.email}`}>Receitas</Link>
      <Link to={`/expense/${currentUser.email}`}>Despesas</Link>
      <Link to="/dashboard">Dashboard</Link>
    </S.Nav>
  );
}
