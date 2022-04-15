import React from 'react';
import { PolarArea, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Header from '../../components/Header';
import * as S from './styles';

function Dashboard() {
  return (
    <S.Container>
      <Header />
      <S.TitleDiv> Dashboard</S.TitleDiv>
      <S.ContainerGrid>
        <S.Content>
          <h1>Despesas por categoria</h1>
          <PolarArea
            data={{
              labels: ['Conta', 'Lazer', 'Outros'],
              datasets: [
                {
                  data: [10, 20, 30],
                  backgroundColor: ['#F6A903', '#EEE70B', '#890A0A'],
                },
              ],
            }}
            height="850px"
            width="850px"
          />
        </S.Content>
        <S.Content>
          <h1>Receitas por categoria</h1>
          <PolarArea
            data={{
              labels: ['Salário', 'Investimento', 'Presente'],
              datasets: [
                {
                  data: [10, 20, 30],
                  backgroundColor: ['#6B4BEB', '#05D02E', '#BF17C8'],
                },
              ],
            }}
            height="850px"
            width="850px"
          />
        </S.Content>
      </S.ContainerGrid>
      <S.AppDiv>
        <S.ContentMonth>
          <h1>Balança mensal</h1>
          <Line
            data={{
              labels: ['Conta', 'Lazer', 'Outros'],
              datasets: [
                {
                  data: [10, 20, 400],
                  backgroundColor: ['#F6A903', '#EEE70B', '#890A0A'],
                },
              ],
            }}
          />
        </S.ContentMonth>
      </S.AppDiv>
    </S.Container>
  );
}

export default Dashboard;
