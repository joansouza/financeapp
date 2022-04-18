import React, { useRef, useState, useEffect } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import * as S from './styles';

import { db } from '../../../../config/firebase-config';

export default function UpdateIncomeModal({
  idIncome,
  user,
  onClose = () => {},
  closeModal = () => {},
  reload = () => {},
}) {
  const valueRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const [income, setIncome] = useState();
  const userDoc = doc(db, `${user}Income`, idIncome);

  const updateIncome = async (e) => {
    e.preventDefault();
    const newFilds = {
      amount: Number(valueRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
    await updateDoc(userDoc, { ...newFilds });
    reload();
    closeModal();
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDoc(userDoc);
      setIncome(data.data());
    };
    getData();
  }, []);

  return (
    <S.FormDiv onClose={onClose}>
      {income ? (
        <S.Form onSubmit={updateIncome}>
          <input
            ref={valueRef}
            placeholder="valor"
            type="number"
            defaultValue={income.amount}
          />
          <input
            ref={descriptionRef}
            placeholder="descrição"
            type="text"
            defaultValue={income.description}
          />

          <select name="category" ref={categoryRef}>
            <option value="Salario">Salário</option>
            <option value="Investimento">Investimeto</option>
            <option value="Presente">Presente</option>
          </select>
          <button type="submit">SALVAR</button>
        </S.Form>
      ) : null}
    </S.FormDiv>
  );
}
