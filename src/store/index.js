import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import expenseSlice from "./expense-slice";
import dataSlice from "./data-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseSlice.reducer,
    data: dataSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
