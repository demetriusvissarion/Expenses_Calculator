import React from "react";
import { useSelector } from "react-redux";

import "./ExpenseDate.css";

const ExpenseDate = () => {
  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  // const year = props.date.getFullYear();
  const state = useSelector((state) => state);

  const month = state.date.toLocaleString("en-US", { month: "long" });
  const day = state.date.toLocaleString("en-US", { day: "2-digit" });
  const year = state.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
