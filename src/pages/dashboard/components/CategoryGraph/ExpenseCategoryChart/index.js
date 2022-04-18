import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import * as T from '../types';
import { useAuth } from '../../../../../context/auth';

export default function ExpenseCategoryChart({ count, fun, others }) {
  const [totalCount, setTotalCount] = useState(0);
  const [totalFun, setTotalFun] = useState(0);
  const [totalOthers, setTotalOthers] = useState(0);
  const { getTotal } = useAuth();

  useEffect(() => {
    setTotalOthers(getTotal(others));
    setTotalCount(getTotal(count));
    setTotalFun(getTotal(fun));
  }, []);

  return (
    <Doughnut
      data={{
        labels: [
          T.expenseTypes.category.count,
          T.expenseTypes.category.fun,
          T.expenseTypes.category.others,
        ],
        datasets: [
          {
            data: [totalCount, totalFun, totalOthers],
            backgroundColor: [
              T.expenseTypes.color.count,
              T.expenseTypes.color.fun,
              T.expenseTypes.color.others,
            ],
          },
        ],
      }}
      height="850px"
      width="850px"
    />
  );
}
