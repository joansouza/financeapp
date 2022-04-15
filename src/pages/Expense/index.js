import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { useAuth } from '../../context/auth/index';
import ExpenseCreateModal from './components/ExpenseCreateModal';
import * as S from './styles';
import Header from '../../components/Header';
import AppList from '../../components/AppList';

function Expense() {
  const [expenses, setExpenses] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { currentUser } = useAuth();
  const docRef = collection(db, `${currentUser.email}Expense`);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(docRef);
      const map = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setExpenses(map);
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
          Adicionar Despesa
        </button>
      </S.AddButton>
      {isModalVisible ? (
        <ExpenseCreateModal
          onClose={() => setIsModalVisible(false)}
          user={currentUser.email}
        />
      ) : null}
      <S.GeneralInfo>
        <S.Content> Despesas Pagas</S.Content>
        <S.Content>Total</S.Content>
      </S.GeneralInfo>
      <S.DescriptionBar>
        <h1>Data</h1>
        <h1>Descrição</h1>
        <h1>Categoria</h1>
        <h1>Valor</h1>
        <h1>Ações</h1>
      </S.DescriptionBar>

      {expenses ? (
        <AppList
          arrayItems={expenses}
          user={currentUser.email}
          type="Expense"
        />
      ) : null}
    </S.Container>
  );
}

export default Expense;
