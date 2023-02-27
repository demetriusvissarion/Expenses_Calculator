import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";

const Expenses = () => {
  const dispatch = useDispatch();
  const [selectedYear, setSelectedYear] = useState("All"); // new Date().getFullYear().toString()

  const selectedYearChangeHandler = (year) => {
    setSelectedYear(year);
    dispatch(filterActions.filterByYear({ year: year, items: items }));
  };

  const test = useSelector((state) => state.filter);
  // console.log(test, "yeayh");

  const items = useSelector((state) => state.expense.items);
  // console.log(items);
  const filteredExpenses = items.filter((state) => {
    if (selectedYear === "All") {
      return items;
    }

    const newDate = new Date(state.date);
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
