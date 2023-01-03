import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onChangeFilter={selectedYearChangeHandler}
        />
        {props.items
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
          .filter(
            (expense) =>
              expense.props.date.getFullYear().toString() === selectedYear
          )}
      </Card>
    </div>
  );
};

export default Expenses;
