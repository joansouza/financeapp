import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { useAuth } from '../../context/auth/index';
import Header from '../../components/Header';
import * as S from './styles';
import IncomeCategoryChart from './components/CategoryGraph/IncomeCategoryChart';
import ExpenseCategoryChart from './components/CategoryGraph/ExpenseCategoryChart';
import MonthGraph from './components/MonthGraph';

function Dashboard() {
  const { currentUser } = useAuth();

  const [categorySalary, setCategorySalary] = useState();
  const [categoryInvestment, setCategoryInvestment] = useState();
  const [categoryGift, setCategoryGift] = useState();

  const [categoryCount, setCategoryCount] = useState();
  const [categoryFun, setCategoryFun] = useState();
  const [categoryOthers, setCategoryOthers] = useState();

  const docRef = collection(db, `${currentUser.email}Income`);
  const docRefExpense = collection(db, `${currentUser.email}Expense`);

  const getCategory = async () => {
    const q = query(docRef, where('category', '==', 'Presente'));
    const items = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCategoryGift(items);
    });
  };

  const getSalary = async () => {
    const q = query(docRef, where('category', '==', 'Salario'));
    const items = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCategorySalary(items);
    });
  };

  const getInvestment = async () => {
    const q = query(docRef, where('category', '==', 'Investimento'));
    const items = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCategoryInvestment(items);
    });
  };
  const getCount = async () => {
    const q = query(docRefExpense, where('category', '==', 'Contas'));
    const items = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCategoryCount(items);
    });
  };

  const getFun = async () => {
    const q = query(docRefExpense, where('category', '==', 'Lazer'));
    const items = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCategoryFun(items);
    });
  };

  const getOthers = async () => {
    const q = query(docRefExpense, where('category', '==', 'Outros'));
    const items = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCategoryOthers(items);
    });
  };

  useEffect(() => {
    getInvestment();
    getSalary();
    getCategory();
    getCount();
    getOthers();
    getFun();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.TitleDiv> Dashboard</S.TitleDiv>
      <S.ContainerGrid>
        <S.Content>
          <h1>Receitas por categoria</h1>
          {categoryGift !== undefined &&
          categoryInvestment !== undefined &&
          categorySalary !== undefined ? (
            <IncomeCategoryChart
              gift={categoryGift}
              salary={categorySalary}
              investment={categoryInvestment}
            />
          ) : null}
        </S.Content>
        <S.Content>
          <h1>Despesas por categoria</h1>

          {categoryCount !== undefined &&
          categoryFun !== undefined &&
          categoryOthers !== undefined ? (
            <ExpenseCategoryChart
              count={categoryCount}
              fun={categoryFun}
              others={categoryOthers}
            />
          ) : null}
        </S.Content>
      </S.ContainerGrid>
      <S.AppDiv>
        <S.ContentMonth>
          <h1>Balança mensal</h1>
          <MonthGraph />
        </S.ContentMonth>
      </S.AppDiv>
    </S.Container>
  );
}

export default Dashboard;
