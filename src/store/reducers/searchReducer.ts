import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: (localStorage.getItem("searchQuery") as string) || "",
  reducers: {
    setSearch: (state, action) => {
      // Update the search query in both state and local storage
      localStorage.setItem("searchQuery", action.payload);
      return (state = action.payload);
    },
  },
});
export const setSearch = searchSlice.actions.setSearch;

export default searchSlice.reducer;
