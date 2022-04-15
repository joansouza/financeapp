import React, { useRef } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import * as S from './styles';

import { db } from '../../../../config/firebase-config';

export default function IncomeModal({ user, onClose = () => {} }) {
  const valueRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const addIncome = async (e) => {
    e.preventDefault();
    const newIncomes = {
      id: +new Date(),
      amount: valueRef.current.value,
      descripton: descriptionRef.current.value,
      category: categoryRef.current.value,
      createdAt: serverTimestamp(),
    };

    const docRef = collection(db, `${user}Income`);
    await addDoc(docRef, { ...newIncomes });
  };

  return (
    <S.FormDiv onClose={onClose}>
      <S.Form onSubmit={addIncome}>
        <input ref={valueRef} placeholder="valor" type="number" />
        <input ref={descriptionRef} placeholder="descrição" type="text" />

        <select name="category" ref={categoryRef}>
          <option value="salary">Salário</option>
          <option value="investment">Investimeto</option>
          <option value="gift">Presente</option>
        </select>
        <button type="submit">SALVAR</button>
      </S.Form>
    </S.FormDiv>
  );
}
