import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expense.items);
  const chartDataPoints = useSelector((state) => state.data.data);

  // console.log(chartDataPoints);
  // console.log(expenses);

  //// Course way:
  for (const expense of expenses) {
    // console.log(expense);
    // const expenseMonth = expense.date.getMonth(); // => January => 0
    // dispatch(expenseMonth);
    //chartDataPoints[expenseMonth].value += expense.amount;
  }

  // Michal way:
  // props.expenses.map((expense) => {
  //   const expenseMonth = expense.date.getMonth();
  //   chartDataPoints[expenseMonth].value += expense.amount;
  // });
  return <Chart />;
};

export default ExpensesChart;
