import "./ExpenseForm.css";

import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expense-slice";
import { useRef } from "react";

const ExpenseForm = (props) => {
  const dispatch = useDispatch();

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef(); // .getFullYear().toString()

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      expenseActions.addExpenses({
        id: titleInputRef.current.value,
        title: titleInputRef.current.value,
        amount: amountInputRef.current.value,
        date: dateInputRef.current.value,
      })
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input id="title" type="text" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            ref={amountInputRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            id="date"
            type="date"
            min="2022-12-21"
            max="2023-12-31"
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={() => props.closeform()}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
