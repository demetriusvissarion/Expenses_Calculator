import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [active, setActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setActive(false);
  };

  const onClick = () => setActive(true);
  const closeForm = () => setActive(false);

  return (
    <div className="new-expense">
      {active ? (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            closeform={closeForm}
          />
        </div>
      ) : (
        <button type="button" onClick={onClick}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
