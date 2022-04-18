import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import { db } from '../../../../config/firebase-config';
import { useAuth } from '../../../../context/auth';
import 'chart.js/auto';

export default function MonthGraph() {
  const { currentUser, getTotal } = useAuth();
  const [month, setMonth] = useState();
  const [incomeData, setIncomeData] = useState();
  const [expenseData, setExpenseData] = useState();

  const colRef = collection(db, `${currentUser.email}Income`);
  const colRef2 = collection(db, `${currentUser.email}Expense`);

  function filterMonth(arr) {
    console.log(month);
    return arr.filter(
      (item) => item.createdAt.toDate().getMonth() === Number(month)
    );
  }

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      const data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      // data.map((dat) => console.log(dat.createdAt.toDate().getMonth()));
      setIncomeData(filterMonth(data));
    });
    onSnapshot(colRef2, (snapshot) => {
      const data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      // data.map((dat) => console.log(dat.createdAt.toDate().getMonth()));
      setExpenseData(filterMonth(data));
    });
  }, [month]);
  return (
    <>
      {' '}
      <select name="month" onChange={(e) => setMonth(e.target.value)}>
        <option value={0}>Janeiro</option>
        <option value={1}>Fevereiro</option>
        <option value={2}>Março</option>
        <option value={3}>Abril</option>
        <option value={4}>Maio</option>
        <option value={5}>Junho</option>
        <option value={6}>Julho</option>
        <option value={7}>Agosto</option>
        <option value={8}>Setembro</option>
        <option value={9}>Outubro</option>
        <option value={10}>Novembro</option>
        <option value={11}>Dezembro</option>
      </select>
      {incomeData ? console.log(incomeData) : null}
      {incomeData &&
      incomeData.length > 0 &&
      expenseData &&
      expenseData.length > 0 ? (
        <Bar
          data={{
            labels: ['Receitas', 'Despesas'],
            datasets: [
              {
                data: [getTotal(incomeData), getTotal(expenseData), 20],
                backgroundColor: ['#00FFA2', '#AD0F00'],
              },
            ],
          }}
        />
      ) : (
        <span>Dont have Issues</span>
      )}
    </>
  );
}
