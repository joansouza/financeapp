import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { useAuth } from '../../context/auth/index';
import IncomeModal from './components/IncomeModal';
import * as S from './styles';
import Header from '../../components/Header';
import ShowIcomes from './components/ShowIncomes';

function Income() {
  const [incomes, setIncomes] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const { currentUser } = useAuth();
  const docRef = collection(db, `${currentUser.email}Income`);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(docRef);
      const map = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setIncomes(map);
    };
    getData();
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
          Adicionar Receita
        </button>
      </S.AddButton>
      {isModalVisible ? (
        <IncomeModal
          onClose={() => setIsModalVisible(false)}
          user={currentUser.email}
          closeModal={() => setIsModalVisible(false)}
          reload={() => setReload(!reload)}
        />
      ) : null}

      {incomes ? (
        <ShowIcomes
          arrayItems={incomes}
          user={currentUser.email}
          reload={() => setReload(!reload)}
        />
      ) : null}
    </S.Container>
  );
}

export default Income;
