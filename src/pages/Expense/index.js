import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { useAuth } from '../../context/auth/index';
import ExpenseCreateModal from './components/ExpenseCreateModal';
import * as S from './styles';
import Header from '../../components/Header';

import ShowExpenses from './components/ShowExpenses';

function Expense() {
  const [expenses, setExpenses] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const { currentUser } = useAuth();
  const docRef = collection(db, `${currentUser.email}Expense`);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(docRef);
      const map = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setExpenses(map);
    };

    getUsers();
  }, [reload]);

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
          closeModal={() => setIsModalVisible(false)}
          reload={() => setReload(!reload)}
        />
      ) : null}

      {expenses ? (
        <ShowExpenses
          arrayItems={expenses}
          user={currentUser.email}
          reload={() => setReload(!reload)}
        />
      ) : null}
    </S.Container>
  );
}

export default Expense;
