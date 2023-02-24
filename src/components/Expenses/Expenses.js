import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

import { useSelector } from "react-redux";

const Expenses = () => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const selectedYearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const items = useSelector((state) => state.expense.items);
  // console.log(items);

  const filteredExpenses = items.filter((expense) => {
    if (selectedYear === "All") {
      return items;
    }
    const newDate = new Date(expense.date);
    return newDate.getFullYear().toString() === selectedYear;
    // console.log(new Date(expense.date));
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onChangeFilter={selectedYearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
