import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { useAuth } from '../../context/auth/index';
import IncomeModal from './components/IncomeModal';
import * as S from './styles';
import Header from '../../components/Header';
import AppList from '../../components/AppList';

function Income() {
  const [incomes, setIncomes] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { currentUser } = useAuth();
  const docRef = collection(db, `${currentUser.email}Income`);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(docRef);
      const map = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setIncomes(map);
    };

    getUsers();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.AddButton>
        <button
          type="button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Adicionar Receita
        </button>
      </S.AddButton>
      {isModalVisible ? (
        <IncomeModal
          onClose={() => setIsModalVisible(false)}
          user={currentUser.email}
        />
      ) : null}
      <S.GeneralInfo>
        <S.Content>
          Receitas recebidas<h1>R$</h1>
        </S.Content>
        <S.Content>
          Total <h1>R$</h1>
        </S.Content>
      </S.GeneralInfo>
      <S.DescriptionBar>
        <h1>Data</h1>
        <h1>Descrição</h1>
        <h1>Categoria</h1>
        <h1>Valor</h1>
        <h1>Ações</h1>
      </S.DescriptionBar>

      {incomes ? (
        <AppList arrayItems={incomes} user={currentUser.email} type="Income" />
      ) : null}
    </S.Container>
  );
}

export default Income;
