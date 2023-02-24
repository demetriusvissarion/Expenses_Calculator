import { createSlice } from "@reduxjs/toolkit";

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

const uniqueId = new Date().getUTCMilliseconds();

const initialExpenseState = DUMMY_EXPENSES;

const expenseSlice = createSlice({
  name: "expense",
  initialState: { items: initialExpenseState },
  reducers: {
    addExpenses(state, action) {
      console.log(action.payload);
      state.items.push({
        id: uniqueId,
        title: action.payload.title,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
  },
});

// const test = useSelector((state) => state);
// console.log(test);

export const expenseActions = expenseSlice.actions;

export default expenseSlice; // if we only need the reducer
