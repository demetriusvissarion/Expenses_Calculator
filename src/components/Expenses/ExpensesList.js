import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

import { useSelector } from "react-redux";

const ExpensesList = (props) => {
  const filteredExpenses = useSelector((state) => state.filter.items);
  console.log(filteredExpenses);
  console.log(props);

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found nothing.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
