import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: 1,
  reducers: {
    increase: (state) => {
      // Update the search query in both state and local storage
      return (state += 1);
    },
    decrease: (state) => {
      // Update the search query in both state and local storage
      return (state -= 1);
    },
    setZero: (state) => {
      return (state = 1);
    },
  },
});
export const increase = paginationSlice.actions.increase;
export const decrease = paginationSlice.actions.decrease;
export const setZero = paginationSlice.actions.setZero;

export default paginationSlice.reducer;
