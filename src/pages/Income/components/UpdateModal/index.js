import React, { useRef } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import * as S from './styles';

import { db } from '../../../../config/firebase-config';

export default function UpdateIncomeModal({
  idIncome,
  user,
  onClose = () => {},
}) {
  const valueRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const updateIncome = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, `${user}Income`, idIncome);
    const newFilds = {
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      amount: valueRef.current.value,
    };
    await updateDoc(userDoc, { ...newFilds });
  };

  return (
    <S.FormDiv onClose={onClose}>
      <S.Form onSubmit={updateIncome}>
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
