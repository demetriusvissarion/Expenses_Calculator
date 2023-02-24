import { createSlice } from "@reduxjs/toolkit";

const initialDataState = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    updateValue(state, action) {
      console.log(action.payload);
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice; // because we only need the reducer
