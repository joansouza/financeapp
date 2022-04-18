import React, { useRef } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import * as S from './styles';
import { db } from '../../../../config/firebase-config';

export default function ExpenseCreateModal({
  user,
  onClose = () => {},
  closeModal = () => {},
  reload = () => {},
}) {
  const valueRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const addExpense = async (e) => {
    e.preventDefault();
    const newExpense = {
      id: +new Date(),
      amount: Number(valueRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      createdAt: serverTimestamp(),
    };

    const docRef = collection(db, `${user}Expense`);
    await addDoc(docRef, { ...newExpense });
    reload();
    closeModal();
  };

  return (
    <S.FormDiv onClose={onClose}>
      <S.Form onSubmit={addExpense}>
        <input ref={valueRef} placeholder="valor" type="number" />
        <input ref={descriptionRef} placeholder="descrição" type="text" />

        <select name="category" ref={categoryRef}>
          <option value="Contas">Contas</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit">SALVAR</button>
      </S.Form>
    </S.FormDiv>
  );
}
