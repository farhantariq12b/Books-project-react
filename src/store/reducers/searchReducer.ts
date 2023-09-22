import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "product",
  initialState: "",
  reducers: {
    setSearch: (state) => {
      state += 1;
    },
  },
});
export const setSearch = searchSlice.actions.setSearch;

export default searchSlice.reducer;
