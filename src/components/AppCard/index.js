import React, { useState, useEffect } from 'react';
import * as S from './styles';

function AppCard({ arr, label, isTotal }) {
  const [totalItem, setTotal] = useState(0);
  const [maior, setMaior] = useState(0);
  const [isFunc, setIsFunc] = useState(true);

  function getTotal(Items) {
    if (Items.length > 1) {
      const total = Items.reduce((soma, item) => soma + item.amount, 0);
      return total;
    }
    if (Items.length < 1) {
      const total = 0;
      return total;
    }
    const total = Items[0].amount;
    return total;
  }
  function getMaior(Items) {
    if (Items.length > 1) {
      // eslint-disable-next-line func-names
      const total = arr.reduce(function (prev, current) {
        return prev.amount > current.amount ? prev : current;
      });
      return total;
    }
    if (Items.length < 1) {
      const total = {
        amount: 0,
      };
      return total;
    }
    const total = Items[0];
    return total;
  }

  useEffect(() => {
    setTotal(getTotal(arr));
    setMaior(getMaior(arr));
    setIsFunc(isTotal);
  }, [arr]);

  return (
    <>
      {' '}
      {isFunc ? (
        <S.Content>
          <h1>{label}</h1>
          <h1>R$ {totalItem}</h1>
        </S.Content>
      ) : (
        <S.Content>
          <h1>{label}</h1>
          <h1>R$ {maior.amount}</h1>
        </S.Content>
      )}
    </>
  );
}
export default AppCard;
