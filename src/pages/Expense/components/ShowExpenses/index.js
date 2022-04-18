import React, { useEffect, useState } from 'react';
import AppCard from '../../../../components/AppCard';
import AppList from '../../../../components/AppList';
import * as S from './styles';

export default function ShowExpenses({ arrayItems, user, reload = () => {} }) {
  const [arrayData, setArrayData] = useState();
  const [categoryOpition, setCategoryOpition] = useState('Todos');

  function search(arr) {
    if (categoryOpition === 'Todos') {
      return arr;
    }
    return arr.filter((item) => item.category === categoryOpition);
  }
  useEffect(() => {
    setArrayData(search(arrayItems));
  }, [categoryOpition, arrayItems]);
  return (
    <>
      <S.GeneralInfo>
        {arrayData ? <AppCard arr={arrayData} label="Total" isTotal /> : null}
        {arrayData ? (
          <AppCard arr={arrayData} label="Maior Despesa" isTotal={false} />
        ) : null}
      </S.GeneralInfo>
      <S.DescriptionBar>
        <h1>Data</h1>
        <h1>Descrição</h1>
        <h1>Categoria</h1>
        <h1>Valor</h1>
        <h1>Ações</h1>
        <select
          name="category"
          onChange={(e) => setCategoryOpition(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Contas">Contas</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
      </S.DescriptionBar>
      {arrayData ? (
        <AppList
          arrayItems={arrayData}
          user={user}
          type="Expense"
          reload={() => reload()}
        />
      ) : null}
    </>
  );
}
