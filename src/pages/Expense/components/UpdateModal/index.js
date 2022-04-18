import React, { useEffect, useRef, useState } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import * as S from './styles';

import { db } from '../../../../config/firebase-config';

export default function UpdateExpenseModal({
  idIncome,
  user,
  onClose = () => {},
  closeModal = () => {},
  reload = () => {},
}) {
  const valueRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const [expense, setExpense] = useState();
  const userDoc = doc(db, `${user}Expense`, idIncome);

  const updateExpense = async (e) => {
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
      setExpense(data.data());
    };
    getData();
  }, []);

  return (
    <S.FormDiv onClose={onClose}>
      {expense ? (
        <S.Form onSubmit={updateExpense}>
          <input
            ref={valueRef}
            placeholder="valor"
            type="number"
            defaultValue={expense.amount}
          />
          <input
            ref={descriptionRef}
            placeholder="descrição"
            type="text"
            defaultValue={expense.description}
          />

          <select name="category" ref={categoryRef}>
            <option value="Conta">Conta</option>
            <option value="Lazer">Lazer</option>
            <option value="Otros">Outros</option>
          </select>
          <button type="submit">SALVAR</button>
        </S.Form>
      ) : null}
    </S.FormDiv>
  );
}
