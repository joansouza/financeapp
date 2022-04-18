import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import * as T from '../types';
import { useAuth } from '../../../../../context/auth';

export default function IncomeCategoryChart({ gift, salary, investment }) {
  const [totalGift, setTotalGift] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [totalInvestment, setTotaInvestment] = useState(0);
  const { getTotal } = useAuth();

  useEffect(() => {
    setTotaInvestment(getTotal(investment));
    setTotalGift(getTotal(gift));
    setTotalSalary(getTotal(salary));
  }, []);

  return (
    <Doughnut
      data={{
        labels: [
          T.incomeTypes.category.gift,
          T.incomeTypes.category.salary,
          T.incomeTypes.category.investment,
        ],
        datasets: [
          {
            data: [totalGift, totalSalary, totalInvestment],
            backgroundColor: [
              T.incomeTypes.color.gift,
              T.incomeTypes.color.salary,
              T.incomeTypes.color.investment,
            ],
          },
        ],
      }}
      height="850px"
      width="850px"
    />
  );
}
