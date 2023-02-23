import React, { Fragment, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import Child1 from "./TestCounter/child1";
// import "./TestCounter/child1.css";

import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";
import { useSelector } from "react-redux";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 4.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Lamp",
    amount: 29.99,
    date: new Date(2022, 7, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const showAuth = useSelector((state) => state.auth.isAuthenticated);
  const [showProfile, setShowProfile] = useState(false);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    // setExpenses([expense, ...expenses]);  // this would work but it's not good practice
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; // this is good practice, because based on older snapshot
    });
  };

  const showProfileHandler = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <Header />
      {!showAuth && <Auth />}
      {showAuth && (
        <Fragment>
          {showProfile && <UserProfile showProfile={showProfileHandler} />}
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </Fragment>
      )}
    </div>
  );
};

export function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="child1_container">
      <h4>Counter</h4>
      <Child1 handleAdd={handleAdd} />
      {count}
    </div>
  );
}

export default App;
