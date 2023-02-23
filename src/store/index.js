import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
// import expenseSlice from "./expense-slice";
// import newExpenseSlice from "./new-expense-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // expense: expenseSlice.reducer,
    // newExpense: newExpenseSlice.reducer,
  },
});

export default store;
