import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  items: [
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
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    filterByYear(state, action) {
      // console.log(action.payload);
      const year = action.payload.year;
      console.log(year);
      const items = action.payload.items;
      const filteredExpenses = items.filter((item) => {
        if (year === "All") {
          return items;
        }
        const newDate = new Date(item.date);
        let counter = 0;
        counter++;
        console.log(counter);
        return newDate.getFullYear().toString() === year;
      });
      // console.log(filteredExpenses);
      state.items = filteredExpenses;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice; // because we only need the reducer
