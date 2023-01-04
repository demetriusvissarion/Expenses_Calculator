import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [active, setActive] = useState(false);
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

/* 
here onSaveExpenseData is a function
onSaveExpenseData prop receives saveExpenseDatahandler function as a value, so we don't execute it here, we just point at the function, so that the function itself is passed to expense form
*/

//////// original
//   <div className="new-expense">
//     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
//   </div>

//////// changed first page
//// above return ---------------
// const [active, setActive] = useState(false);
// const onClick = () => setActive(true);

//// inside return -------------
// <div className="new-expense">
//   <button type="button" onClick={() => onClick}>
//     Add New Expense
//   </button>

//   {active && (
//     <div className="new-expense">
//       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
//     </div>
//   )}
// </div>;

////// Assignment 4: action plan
// display only "Add New Expense" button page at begining (with existing expenses below)
// set onClick to link the button to ExpenseForm
// hide the "Add New Expense" button while the ExpenseForm is open
// add new "Close" button inside the ExpenseForm

// when buttons "Closed" or "Add expense" are clicked exit the ExpenseForm and come back to "Add New Expense" button page
