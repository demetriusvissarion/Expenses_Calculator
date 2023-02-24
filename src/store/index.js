import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import expenseSlice from "./expense-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseSlice.reducer,
  },
});

export default store;
